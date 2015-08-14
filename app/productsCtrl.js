app.controller('productsCtrl', function ($scope, $modal, $filter, Data) {
	$scope.youtubeTitle = "search results here";
	$scope.searchResults = function(searchInput){
		
	debugger; 
	};
	
	$scope.search = function(searchInput){
	searchInput += " tutorials"
	  var request = gapi.client.youtube.search.list({
		q: encodeURIComponent(searchInput).replace('%20','+'),
		part: 'snippet',
		type: 'video',
		order: 'viewCount'
	  });

	  request.execute(function(response) {
		$scope.videos = response.result.items;
		$scope.videoUrl = "https://www.youtube.com/embed/Hl-zzrqQoSE";
		$scope.$apply();
	  });
	};

	
	
});
