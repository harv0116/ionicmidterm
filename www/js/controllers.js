angular.module('starter.controllers', ['ionic', 'ngCordova', 'ui.router', 'ngStorage', 'starter.services'])

.controller('AppCtrl', function($scope) {


})

.controller('List1Ctrl', function($scope, $stateParams, LocalStorageService, $cordovaVibration, $cordovaLocalNotification) {
	$scope.data = {};
	var CheckBoxCounter = 0;
				
	if (LocalStorageService.getStorageList('List1')) {
		$scope.tasks = LocalStorageService.getStorageList('List1');
	} else {
		$scope.tasks = [ 'Task 1', 'Task 2', 'Task 3' ];
	}
	
	if (LocalStorageService.getStorageList('Settings')) {
		$scope.settingsList = LocalStorageService.getStorageList('Settings');
	} else {
		$scope.settingsList = [
    	{ text: "Vibrate on Item Complete", checked: false },
    	{ text: "Notify when List Completed", checked: false }
  		];
		LocalStorageService.setStorageList('Settings',$scope.settingsList);	
	}
				
				
	$scope.addTask = function() {
		$scope.tasks.push($scope.data.task);
		LocalStorageService.setStorageList('List1',$scope.tasks);
		
		$scope.data.task = "";
	}
	$scope.removeTask = function(index) {
		$scope.tasks.splice(index, 1);
		LocalStorageService.setStorageList('List1',$scope.tasks);

	}
	$scope.checkTask = function(task) {
		if ($scope.settingsList[0].checked==true) {
			$cordovaVibration.vibrate(500);		
		} 
		LocalStorageService.setStorageList('List1',$scope.tasks);
		
		CheckBoxCounter++;
		
		if (CheckBoxCounter== $scope.tasks.length) {
						
			$cordovaLocalNotification.add({
				id:1,
				title: "Finished Menu Items",
				text: "The last entry was checked"
			}).then(function (result) {
			});
		}
	
	
	}
	
	

})

.controller('List2Ctrl', function($scope, $stateParams, LocalStorageService, $cordovaVibration, $cordovaLocalNotification) {
	$scope.data = {};
				
	if (LocalStorageService.getStorageList('List2')) {
		$scope.tasks = LocalStorageService.getStorageList('List2');
	} else {
		$scope.tasks = [ 'Task 4', 'Task 5', 'Task 6' ];
	}
				
	if (LocalStorageService.getStorageList('Settings')) {
		$scope.settingsList = LocalStorageService.getStorageList('Settings');
	} else {
		$scope.settingsList = [
    	{ text: "Vibrate on Item Complete", checked: false },
    	{ text: "Notify when List Completed", checked: false }
  		];
		LocalStorageService.setStorageList('Settings',$scope.settingsList);	
	}
				
	$scope.addTask = function() {
		$scope.tasks.push($scope.data.task);
		LocalStorageService.setStorageList('List2',$scope.tasks);
		
		$scope.data.task = "";
	}
	$scope.removeTask = function(index) {
		$scope.tasks.splice(index, 1);
		LocalStorageService.setStorageList('List2',$scope.tasks);
	}
	$scope.checkTask = function(task) {
		if ($scope.settingsList[0].checked==true) {
			$cordovaVibration.vibrate(500);		
		} 
		LocalStorageService.setStorageList('List2',$scope.tasks);
		
		CheckBoxCounter++;
		
		if (CheckBoxCounter== $scope.tasks.length) {
						
			$cordovaLocalNotification.add({
				id:1,
				title: "Finished Menu Items",
				text: "The last entry was checked"
			}).then(function (result) {
			});
		}
	
	
	}
	
})

.controller('List3Ctrl', function($scope, $stateParams, LocalStorageService, $cordovaVibration, $cordovaLocalNotification) {
	$scope.data = {};
				
	if (LocalStorageService.getStorageList('List3')) {
		$scope.tasks = LocalStorageService.getStorageList('List3');
	} else {
		$scope.tasks = [ 'Task 7', 'Task 8', 'Task 9' ];
	}
				
	if (LocalStorageService.getStorageList('Settings')) {
		$scope.settingsList = LocalStorageService.getStorageList('Settings');
	} else {
		$scope.settingsList = [
    	{ text: "Vibrate on Item Complete", checked: false },
    	{ text: "Notify when List Completed", checked: false }
  		];
		LocalStorageService.setStorageList('Settings',$scope.settingsList);	
	}
				
	$scope.addTask = function() {
		$scope.tasks.push($scope.data.task);
		LocalStorageService.setStorageList('List3',$scope.tasks);
		
		$scope.data.task = "";
	}
	$scope.removeTask = function(index) {
		$scope.tasks.splice(index, 1);
		LocalStorageService.setStorageList('List3',$scope.tasks);
	}
	$scope.checkTask = function(task) {
		if ($scope.settingsList[0].checked==true) {
			$cordovaVibration.vibrate(500);		
		} 
		LocalStorageService.setStorageList('List3',$scope.tasks);
		
		CheckBoxCounter++;
		
		if (CheckBoxCounter== $scope.tasks.length) {
						
			$cordovaLocalNotification.add({
				id:1,
				title: "Finished Menu Items",
				text: "The last entry was checked"
			}).then(function (result) {
			});
		}
	
	
	}
})

		
.controller('SettingsCtrl', function($scope, LocalStorageService) {
	if (LocalStorageService.getStorageList('Settings')) {
		$scope.settingsList = LocalStorageService.getStorageList('Settings');
	} else {
		$scope.settingsList = [
    	{ text: "Vibrate on Item Complete", checked: false },
    	{ text: "Notify when List Completed", checked: false }
  		];
		LocalStorageService.setStorageList('Settings',$scope.settingsList);	
	}
});