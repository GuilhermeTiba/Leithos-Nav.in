/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
/* eslint-disable quote-props */

export const swaggerDocument = {
  "openapi": "3.0.1",
  "info": {
    "title": "Leitosmap",
    "description": "Documentação de rotas para a API do Leitosmap",
    "version": "Public v.01",
  },
  "servers": [{
    "url": "https://leitos-map.herokuapp.com",
  }],
  "paths": {
    "/login": {
      "post": {
        "summary": "Given JSON, return a Autentication TOKEN",
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "password": {
                    "type": "string",
                  },
                  "email": {
                    "type": "string",
                  },
                },
              },
              "examples": {
                "Correct": {
                  "value": "{\r\n    \"email\": \"guitib2000@gmail.com\",\r\n    \"password\": \"guitib123\"\r\n}",
                },
              },
            },
          },
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "405": {
            "description": "The request method is known on the server but is not supported by the target resource.",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["login"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/navbar/get-all-sections": {
      "get": {
        "summary": "Return JSON with all the sections",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["navbar"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/navbar/create-section": {
      "post": {
        "summary": "Create a section (need a JSON)",
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                  },
                },
              },
              "examples": {
                "0": {
                  "value": "{\n    \"id\": \"NEUROLOGY\"\n}",
                },
              },
            },
          },
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "403": {
            "$ref": "#/components/responses/Forbidden",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["navbar"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/navbar/search": {
      "post": {
        "summary": "Given a string, return a Patient or a Bed",
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "searchString": {
                    "type": "string",
                  },
                },
              },
              "examples": {
                "0": {
                  "value": "{\n    \"searchString\": \"Guilherme\"\n}",
                },
              },
            },
          },
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "404": {
            "$ref": "#/components/responses/NotFound",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["navbar"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/section/beds-per-section/{id}": {
      "get": {
        "summary": "Return a JSON with beds in a section",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "404": {
            "$ref": "#/components/responses/NotFound",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["section"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/section/beds-status-quantity-per-section/{id}": {
      "get": {
        "summary": "Given a section ID, return the beds status quantity",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "404": {
            "$ref": "#/components/responses/NotFound",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["section"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/section/patient/{id}": {
      "get": {
        "summary": "Return a patient JSON",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "404": {
            "$ref": "#/components/responses/NotFound",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["section"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/section/bed": {
      "post": {
        "summary": "Create a new Bed",
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                  },
                  "section": {
                    "type": "string",
                  },
                  "type": {
                    "type": "string",
                  },
                },
              },
              "examples": {
                "0": {
                  "value": "{\r\n    \"name\": \"A6\",\r\n    \"type\": \"COMMON\",\r\n    \"section\": \"PEDIATRY\"\r\n}",
                },
              },
            },
          },
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "404": {
            "$ref": "#/components/responses/NotFound",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
          "409": {
            "$ref": "#/components/responses/Conflict",
          },
        },
        "tags": ["section"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "put": {
        "summary": "Update bed (Need JSON)",
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                  },
                  "status": {
                    "type": "string",
                  },
                },
              },
              "examples": {
                "0": {
                  "value": "{\n    \"id\": \"df589863-f3a9-40c9-88b4-d1ce3826f93c\",\n    \"status\": \"CLEANING_NEEDED\"\n}",
                },
              },
            },
          },
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "403": {
            "$ref": "#/components/responses/Forbidden",
          },
          "404": {
            "$ref": "#/components/responses/NotFound",
          },
        },
        "tags": ["section"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "delete": {
        "summary": "Delete bed (Need JSON)",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "403": {
            "$ref": "#/components/responses/Forbidden",
          },
          "404": {
            "$ref": "#/components/responses/NotFound",
          },
        },
        "tags": ["section"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/section/patient": {
      "post": {
        "summary": "Create a new patient (Need JSON)",
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "sex": {
                    "type": "string",
                  },
                  "bedId": {
                    "type": "string",
                  },
                  "last_name": {
                    "type": "string",
                  },
                  "diagnosis": {
                    "type": "array",
                    "items": {
                      "type": "string",
                    },
                  },
                  "additional_informations": {
                    "type": "string",
                  },
                  "first_name": {
                    "type": "string",
                  },
                  "age": {
                    "type": "integer",
                  },
                  "ssn": {
                    "type": "string",
                  },
                },
              },
              "examples": {
                "0": {
                  "value": "{\r\n    \"age\": 21,\r\n    \"sex\":\"MALE\",\r\n    \"first_name\":\"Malas\",\r\n    \"last_name\":\"lulis\",\r\n    \"ssn\":\"12341512887\",\r\n    \"additional_informations\":\"EXAUSTÃO APOS PASSAR 3 DIAS NO RPG DO DEMONIO,NEW WORLD\",\r\n    \"bedId\":\"df589863-f3a9-40c9-88b4-d1ce3826f93c\",\r\n    \"diagnosis\":[\"NEUROLOGY\"]\r\n}",
                },
              },
            },
          },
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "400": {
            "$ref": "#/components/responses/BadRequest",
          },
          "409": {
            "$ref": "#/components/responses/Conflict",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["section"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "put": {
        "summary": "Update patient (Need JSON)",
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "patientId": {
                    "type": "string",
                  },
                  "age": {
                    "type": "integer",
                  },
                },
              },
              "examples": {
                "0": {
                  "value": "{\n    \"patientId\": \"84472eaf-eb0f-4471-86fc-bab3cb17788e\",\n    \"age\": 54\n}",
                },
              },
            },
          },
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "400": {
            "$ref": "#/components/responses/BadRequest",
          },
          "404": {
            "$ref": "#/components/responses/NotFound",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["section"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "delete": {
        "summary": "Delete patient (Need JSON)",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "404": {
            "$ref": "#/components/responses/NotFound",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["section"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/beds-percentage-per-status": {
      "get": {
        "summary": "Return a count of beds per status",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/beds-quantity-per-status": {
      "get": {
        "summary": "Auto generated using Swagger Inspector",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/patient-quantity-per-diagnosis": {
      "get": {
        "summary": "Return JSON with count of patient per diagnosis",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/patient-quantity-per-sex": {
      "get": {
        "summary": "Return JSON with count of patient per sex",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/patient-quantity-per-age": {
      "get": {
        "summary": "Return JSON with count of patient per Age (range)",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/daily-in-and-outs": {
      "get": {
        "summary": "Return In and Outs for a Day",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/weekly-in-and-outs": {
      "get": {
        "summary": "Return In and Outs for a Week",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/monthly-in-and-outs": {
      "get": {
        "summary": "Return In and Outs for a Month",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/yearly-in-and-outs": {
      "get": {
        "summary": "Return In and Outs for a Year",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/beds-quantity-per-status-and-section": {
      "get": {
        "summary": "Return JSON with beds count per status in a section",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/dashboard/average-time-per-funcionality": {
      "get": {
        "summary": "Return JSON with average time per status",
        "description": "",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
          "503": {
            "$ref": "#/components/responses/ServiceUnavailable",
          },
        },
        "tags": ["dashboard"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
    "/register": {
      "post": {
        "summary": "Register a new USER (need JSON)",
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "password": {
                    "type": "string",
                  },
                  "phone": {
                    "type": "string",
                  },
                  "last_name": {
                    "type": "string",
                  },
                  "first_name": {
                    "type": "string",
                  },
                  "email": {
                    "type": "string",
                  },
                },
              },
              "examples": {
                "0": {
                  "value": "{\r\n    \"first_name\": \"Malu\",\r\n    \"last_name\": \"Melo\",\r\n    \"email\": \"xa@gmail.com\",\r\n    \"password\": \"1234\",\r\n    \"phone\": \"1111111\"\r\n}",
                },
              },
            },
          },
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/OK",
          },
        },
        "tags": ["register"],
        "servers": [{
          "url": "https://leithos-navin.herokuapp.com",
        }],
      },
      "servers": [{
        "url": "https://leithos-navin.herokuapp.com",
      }],
    },
  },
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT",
      },
    },
    "schemas": {
      "Error": {

      },
    },
    "responses": {
      "OK": {
        "description": "The request succeeded.",
        "content": {
          "application/json": {

          },
        },
      },
      "BadRequest": {
        "description": "The server couldn't understand the request due to invalid syntax.",
        "content": {
          "application/json": {

          },
        },
      },
      "Unauthorized": {
        "description": "The client must autenticate itself to get the requested response.",
        "content": {
          "application/json": {

          },
        },
      },
      "Conflict": {
        "description": "The request conflicts with the current state of the server.",
        "content": {
          "application/json": {

          },
        },
      },
      "Forbidden": {
        "description": "The client doesn't have acess rights to the content. But the client identity is known to the server.",
        "content": {
          "application/json": {

          },
        },
      },
      "NotFound": {
        "description": "Could not find Id/URL on the server.",
        "content": {
          "application/json": {

          },
        },
      },
      "ServiceUnavailable": {
        "description": "Service Error.",
        "content": {
          "application/json": {

          },
        },
      },
    },
  },
  "security": [{
    "bearerAuth": [],
  }],
};
