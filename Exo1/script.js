angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.usuario = "";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
	
		$scope.questions = [
			{id:"01",
			 question:"Que veut dire T.A.R.D.I.S ?",
			 reponseA:"Trajet à rebondissements dimensionnel inter spaciaux",
			 reponseB:"Temps à relativité dimensionnelle inter spatiale",
			 reponseC:"Temps a relativité dimenssionelle inter stelaire",
			 reponseD:"La réponse D",
			 correct:"reponseB",
			 points:2,
			 
			},
			{id:"02",
			 question:"Combien y'a t'il de docteur ?",
			 reponseA:"10",
			 reponseB:"12",
			 reponseC:"13",
			 reponseD:"La réponse D",
			 correct:"reponseC",
			 points:2,
			 
			},
			{id:"03",
			 question:"Que ne faut-il pas faire devant un ange pleureur ?",
			 reponseA:"Le toucher",
			 reponseB:"Cligner des yeux",
			 reponseC:"Le regarder",
			 reponseD:"La réponse D",
			 correct:"reponseB",
			 points:2,
			
			},
			{id:"04",
			 question:"Combien a t'il de régéneration ?",
			 reponseA:"9",
			 reponseB:"13",
			 reponseC:"14",
			 correct:"reponseC",
			 points:2,
			
			},
			{id:"05",
			 question:"Qui, pour le doctor est le maître ?",
			 reponseA:"Son pire énemi",
			 reponseB:"Son meilleur ami",
			 reponseC:"Son père",
			 reponseD:"La réponse D",
			 correct:"reponseB",
			 points:2,
			
			},
			

		];
		
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;
		
		$scope.valider = function() {
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
			}
			
			$scope.numquestion += 1;
			
			if ($scope.numquestion >= 5)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points <=5)
				{
					$scope.texte = "Go regarder D.WHO :) !";
				}
				
				else if ($scope.points > 5 && $scope.points <8)
				{
					$scope.texte = "peu mieux faire :D !";
				}
				else if ($scope.points >= 10)
				{
					$scope.texte = "Fantastic !";
				}
			}
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
				$scope.image = $scope.questions[$scope.numquestion].image;
				
			}
			
			$scope.reponse = "";
		};
	}]);