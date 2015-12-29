app.controller("HomeCtrl", ['$scope', '$http',"$timeout",'$filter', function($scope, $http, $timeout, $filter)
{
  var orderBy = $filter('orderBy');
  this.playlists = [];
  this.playerVars = {
    autoplay: 1
  };
  this.youtubeVideoId = 'gbYeKK_xo6U';
  var playlistsUrl = 'https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyCsH_dFYaU0Pvc2KZUE-I4LI8ppg3DmZKk&channelId=UCznWXigAvBa1ZtrgRmJGZgg&part=id,snippet&maxResults=24';
  this.init = function(){
    $http.get(playlistsUrl).success(angular.bind(this, function(data){
      this.playlists = orderBy(data.items,'title', false);
    }));
  };
  this.init();
/*  this.vidStreaming = document.getElementById("vidStreaming");
  this.localstream = "";
  var gotStream = function(stream)
  {
    this.vidStreaming.srcObject = stream;
    this.localstream = stream;
  };
  var errorHandler = function(error){
    trace('navigator.getUserMedia error: ', error);
  };
  this.init = function()
  {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    navigator.getUserMedia({video:true, audio:true}, angular.bind(this, gotStream), errorHandler);
  };
  this.init();
  */
}]);
