$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to check search functionality of website.",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"\u003cmake\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"\u003cmodel\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"\u003clocation\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"\u003cprice\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$30,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "QLD - All",
        "$20,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7376311400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Audi\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"A3\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$30,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 81184800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 964381300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1552264000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 112977900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 162255700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 119863600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 151286400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 101754600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 2704949600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 98392200,
  "status": "passed"
});
formatter.after({
  "duration": 737063200,
  "status": "passed"
});
formatter.before({
  "duration": 4285484900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Jeep\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Compass\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"QLD - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$20,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1104980400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1494866200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 135750500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 144878700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compass",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 276140100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 97390600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 94899100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 2618501300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 201291900,
  "status": "passed"
});
formatter.after({
  "duration": 735560400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I select make \"\u003cmake\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select model \"\u003cmodel\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select location \"\u003clocation\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select price \"\u003cprice\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 34,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$30,000"
      ],
      "line": 35,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Kia",
        "Rio",
        "VIC - All",
        "$30,000"
      ],
      "line": 36,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3875048500,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I select make \"Audi\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select model \"A3\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select location \"NSW - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select price \"$30,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 783950400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1489444700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 111528300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 125864400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 158264400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 103880700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 88983600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 2429395400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 223821100,
  "status": "passed"
});
formatter.after({
  "duration": 723633400,
  "status": "passed"
});
formatter.before({
  "duration": 4195354700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I select make \"Kia\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select model \"Rio\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select location \"VIC - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select price \"$30,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 669746800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1483585700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 156593600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 118536000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rio",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 472079800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 117411500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 90183500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 2895067200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 47088900,
  "status": "passed"
});
formatter.after({
  "duration": 894447800,
  "status": "passed"
});
formatter.uri("cardealer.feature");
formatter.feature({
  "line": 1,
  "name": "Car Dealer search functionality",
  "description": "As a user I want to check Car dealers are searchable.",
  "id": "car-dealer-search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4774044000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Search the dealer name",
  "description": "",
  "id": "car-dealer-search-functionality;search-the-dealer-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click ‘Find a Dealer’ link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I see the dealer lists",
  "rows": [
    {
      "cells": [
        "77 Motors"
      ],
      "line": 10
    },
    {
      "cells": [
        "A\u0026S Autos Pty Ltd"
      ],
      "line": 11
    },
    {
      "cells": [
        "AUDI CENTRE MELBOURNE"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 671262600,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iClickFindADealerLink()"
});
formatter.result({
  "duration": 2683986700,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iSeeTheDealerLists(DataTable)"
});
formatter.result({
  "duration": 10974302500,
  "status": "passed"
});
formatter.after({
  "duration": 704785700,
  "status": "passed"
});
});