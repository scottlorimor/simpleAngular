angular.module('friendsList').controller('mainCtrl', function($scope) {
	$scope.name = "This is a test"
	$scope.friends = ["ben", "tom", "kevin", "bob"]
	$scope.newFriend = ''
	
	$scope.addFriend = function(friend) {
		$scope.friends.push($scope.newFriend);
		console.log(friend+" was added to array.")
		$scope.newFriend = ''
	}
})
