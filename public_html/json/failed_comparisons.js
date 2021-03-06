var failedData = 
{
    "date": "2015/06/30 10:53:07",
    "env": "dev",
    "comparisons": [{
            "testName": "JSONComparisonToolTests",
            "methodName": "testOne",
            "expected": {
                "Id": 1,
                "companyId": 1,
                "name": "bonzo",
                "priviledged": true
            },
            "actual": {
                "Id": 3,
                "companyId": 1,
                "name": "bonzo",
                "priviledged": true
            }
        }, {
            "testName": "JSONComparisonToolTests",
            "methodName": "testTwo",
            "expected": {
                "Id": 1,
                "companyId": 1,
                "name": "bonzo",
                "priviledged": true
            },
            "actual": {
                "Id": 3,
                "companyId": 1,
                "name": "bonzo",
                "priviledged": true
            }
        }, {
            "testName": "JSONComparisonToolTests",
            "methodName": "testThree",
            "expected": {
                "Id": 1,
                "companyId": 1,
                "name": "bonzo",
                "priviledged": true
            },
            "actual": {
                "Id": 2,
                "companyId": 1,
                "name": "bonzo",
                "priviledged": true
            }
        },
        {
            "testName": "RestaurantTests",
            "methodName": "testFour",
            "expected":
                    {
                        "name": "Bellefleur Winery & Restaurant",
                        "zipCode": "92008",
                        "city": "Carlsbad",
                        "state": "CA",
                        "version": 1,
                        "id": 5,
                        "reviewDTOs": [
                            {
                                "starRating": 8,
                                "reviewListing": "Impeccable service!",
                                "stampDate": 1422964478318,
                                "id": 9
                            }
                        ]
                    },
            "actual":
                    {
                        "name": "Martin's Chuzzlewit",
                        "zipCode": "92008",
                        "city": "Hannibal",
                        "state": "KY",
                        "version": 1,
                        "id": 5,
                        "reviewDTOs": [
                            {
                                "starRating": 8,
                                "reviewListing": "Impeccable service!",
                                "stampDate": 1422964478318,
                                "id": 9
                            },
                            {
                                "starRating": 2,
                                "reviewListing": "Yuk!!",
                                "stampDate": 1422342278318,
                                "id": 21
                            }
                        ]
                    }




        }


    ]
}




 

