'use strict';

angular.module('local101App')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, fileUpload) {

    $(document).ready(function() {
      $('select').material_select();
      $('.datepicker').pickadate({
        selectMonths: false, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
    });

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.user = {};
    $scope.errors = {};
    $scope.user.priv = 'user';
    $scope.boycott = {boycotted: 'false'};
    $scope.document = {type: 'true'};
    $scope.delegates = [];
    $scope.trustees = [];
    $scope.boycotts = [];
    $scope.news = {privacy: 'false'};
    $http.get('/api/delegates').then(function(res) {
      for(var index in res.data)
        $scope.delegates[index] = res.data[index];
    }, function(err) {
      console.log(err);
    });
    $http.get('/api/trustees').then(function(res) {
      for(var index in res.data)
        $scope.trustees[index] = res.data[index];
    }, function(err) {
      console.log(err);
    });
    $http.get('/api/boycotts').then(function(res) {
      for(var index in res.data)
        $scope.boycotts[index] = res.data[index];
    }, function(err) {
      console.log(err);
    });
    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          role: $scope.user.priv
        })
        .then( function() {
          $scope.user = {};
          $scope.submitted = false;
          $scope.users = User.query();
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    //uploadHeader
    $scope.uploadHeader = function() {
      var file = $scope.header.picture;
      if($scope.header.picture.type == "image/jpeg"){
        fileUpload.uploadFileToUrl(file, "/api/headerPicture");
        $http.post('/api/headerCaptions', {caption: $scope.header.caption}).then(function(res) {
          $scope.header.picture = null;
          Materialize.toast('File uploaded!', 4000, 'rounded');
        }, function(err) {
          Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
        });
      }
      else
        Materialize.toast('ERROR: must end in ".jpg"', 4000, 'rounded');
    };

    /*
    * Function: Broadcast
    * Notes: $scope.news.privacy tells whether the news is private or not
    */
    $scope.broadcast = function() {
      var destination = ($scope.news.privacy) ? '/api/privateNews' : '/api/publicNews';
      var data = {
        heading: $scope.news.heading,
        details: $scope.news.description,
        headingSpansih: $scope.news.heading_es,
        detailsSpanish: $scope.news.description_es,
        url: $scope.news.url
      };
      
      $http.post(destination, data).then(function(res) {
        $scope.news.heading = '';
        $scope.news.description = '';
        $scope.news.heading_es = '';
        $scope.news.description_es = '';
        $scope.news.url = '';
        Materialize.toast('News Posted! "' + data.heading + '"', 4000, 'rounded');
      }, function(err) {
        Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
      });
    };

    //Function: Share
    $scope.share = function() {
      var data = {
        name: $scope.event.name,
        time: $scope.event.date,
        location: $scope.event.location
      };
      console.log(data.time);
      $http.post("/api/events", data).then(function(res) {
        $scope.event.name = '';
        $scope.event.date = '';
        $scope.event.location = '';
        Materialize.toast('Event Posted! "' + data.name + '"', 4000, 'rounded');
      }, function(err) {
        Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
      });
    };

    //addOfficers
    $scope.addOfficer = function(form) {
      var destination = "/api/officers"
      var data = {
        name: $scope.officer.name,
        position: $('select#officerRole')[0].options[$('select#officerRole')[0].selectedIndex].value,
        bio: $scope.officer.bio,
        image: $scope.officer.image
      };
      $http.delete(destination + "/" + data.position).then(function(res) {
        $http.post(destination, data).then(function(res) {
          $scope.officer.name = '';
          $scope.officer.bio = '';
          $scope.officer.image = '';
          Materialize.toast('Officer Changed! "' + data.name + '" has been added.', 4000, 'rounded');
        }, function(err) {
          Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
        });
      }, function(err) {
        if(err.status == 404)
          $http.post(destination, data).then(function(res) {
            $scope.officer.name = '';
            $scope.officer.bio = '';
            $scope.officer.image = '';
            Materialize.toast('Officer Changed! "' + data.name + '" has been added.', 4000, 'rounded');
          }, function(err) {
            Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
          });
        else
          Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
      });
    };

    //addDelegate
    $scope.addDelegate = function() {
      var data = {
        name: $scope.delegate.name
      };
      $http.post("/api/delegates", data).then(function(res) {
        $scope.delegate.name = '';
        $http.get('/api/delegates').then(function(res) {
          for(var index in res.data)
            $scope.delegates[index] = res.data[index];
        }, function(err) {
          console.log(err);
        });
        Materialize.toast('Delegate added! "' + data.name + '" has been added.', 4000, 'rounded');
      }, function(err) {
        Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
      });
    };

    //deleteDelegate
    $scope.deleteDelegate = function(person) {
      $http.delete('/api/delegates/' + person._id ).then(function(res) {
        angular.forEach($scope.delegates, function(u, i) {
          if ( u === person) {
            $scope.delegates.splice(i, 1);
          }
        });
      }, function(err) {
        Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
      });
    };

    //addTrustee
    $scope.addTrustee = function() {
      var data = {
        name: $scope.trustee.name
      };
      $http.post("/api/trustees", data).then(function(res) {
        $scope.trustee.name = '';
        $http.get('/api/trustees').then(function(res) {
          for(var index in res.data)
            $scope.trustees[index] = res.data[index];
        }, function(err) {
          console.log(err);
        });
        Materialize.toast('Trustee added! "' + data.name + '" has been added.', 4000, 'rounded');
      }, function(err) {
        Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
      });
    };

    //deleteTrustee
    $scope.deleteTrustee = function(person) {
      $http.delete('/api/trustees/' + person._id ).then(function(res) {
        angular.forEach($scope.trustees, function(u, i) {
          if ( u === person) {
            $scope.trustees.splice(i, 1);
          }
        });
      }, function(err) {
        Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
      });
    };

    //uploadDocument
    $scope.uploadDocument = function() {
      var file = $scope.document.file;
      var destination = $scope.document.type ? "/api/availableJobs" : "/api/classes";
      if($scope.document.type == 'true'){
        if($scope.document.file.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
          fileUpload.uploadFileToUrl(file, destination);
        else {
          Materialize.toast('ERROR: must end in ".docx"', 4000, 'rounded');
        }
      } else {
        if($scope.document.file.type == "application/pdf")
          fileUpload.uploadFileToUrl(file, destination);
        else {
          Materialize.toast('ERROR: must end in ".pdf"', 4000, 'rounded');
        }
      }
    };

    //addBoycott
    $scope.addBoycott = function() {
      var data = {
        name: $scope.boycott.name,
        boycott: $scope.boycott.boycotted
      };
      $http.post('/api/boycotts', data).then(function(res) {
        $http.get('/api/boycotts').then(function(res) {
          for(var index in res.data)
            $scope.boycotts[index] = res.data[index];
        }, function(err) {
          console.log(err);
        });
        $scope.boycott.name = '';
      }, function(err) {
        Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
      });
    };

    //deleteBoycott
    $scope.deleteBoycott = function(boycott) {
      $http.delete('/api/boycotts/' + boycott._id ).then(function(res) {
        angular.forEach($scope.boycotts, function(u, i) {
          if ( u === boycott) {
            $scope.boycotts.splice(i, 1);
          }
        });
      }, function(err) {
        Materialize.toast('ERROR: "' + err.status + '"', 4000, 'rounded');
      });
    };

  });
