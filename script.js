/*jslint browser:true, white:true */
/*global $ */

(function() {
  "use strict";
  angular.module("myApp", []).controller("myCtrl", function() {
    // https://docs.angularjs.org/api/ng/filter/filter
    this.comparateur = function(actual, expected) {
      if (expected.length === 0) {
        return true;
      }
      return expected.indexOf(actual) > -1;
    };

    this.toggleGenre = function(genre) {
      var pos = this.selectedGenre.indexOf(genre);
      if (pos === -1) {
        this.selectedGenre.push(genre);
      } else {
        this.selectedGenre.splice(pos, 1);
      }
    };

    this.selectedGenre = [];

    this.genres = [
      "Creation",
      "suppression",
      "modification",
      "vente",
      "Achat-Interne",
      "Achat-Externe",
      "stock",
      "user",

    ];

    this.historiques = [
      {
        title: "Achat des Marchandise (en chine)",
        genre: ["modification", "suppression","Creation","Achat-Externe"]
      },
      {
        title: "Vente au Jumbo Score",
        genre: ["modification", "suppression","Creation","vente"]
      },
      {
        title: "Recouvrement à SuperMaky",
        genre: ["modification", "suppression","Creation"]
      },
      {
        title: "Expansion en Europe",
        genre: ["modification", "Creation", "vente", "international"]
      },
      {
        title: "Nouvelle stratégie marketing",
        genre: ["modification", "Creation", "marketing"]
      },
      {
        title: "Nouvelles embauches",
        genre: ["modification", "Creation", "ressources humaines"]
      },
      {
        title: "Innovation technologique",
        genre: ["modification", "Creation", "technologie"]
      },
      {
        title: "Lancement d'un nouveau produit",
        genre: ["modification", "Creation", "vente", "produit"]
      },
      {
        title: "Réorganisation interne",
        genre: ["modification", "Creation", "gestion"]
      },
      {
        title: "Nouveau partenariat stratégique",
        genre: ["modification", "Creation", "partenariat"]
      },
      {
        title: "Optimisation des processus",
        genre: ["modification", "Creation", "gestion"]
      },
      {
        title: "Étude de marché internationale",
        genre: ["modification", "Creation", "marketing", "international"]
      },
      {
        title: "Formation du personnel",
        genre: ["modification", "Creation", "ressources humaines"]
      }      
    ];

    // var genre_string = JSON.stringify(film.genre);
  });
})();