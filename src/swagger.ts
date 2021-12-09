export const swaggerDocument = {
  "openapi" : "3.0.1",
  "info" : {
    "title" : "Leitosmap",
    "description" : "Documentação de rotas para a API do Leitosmap",
    "version" : "Public v.01"
  },
  "servers" : [ {
    "url" : "https://leithos-navin.herokuapp.com"
  } ],
  "paths" : {
    "/login" : {
      "post" : {
        "description" : "Given JSON, return a Autentication TOKEN",
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "password" : {
                    "type" : "string"
                  },
                  "email" : {
                    "type" : "string"
                  }
                }
              },
              "examples" : {
                "Correct" : {
                  "value" : "{\r\n    \"email\": \"guitib2000@gmail.com\",\r\n    \"password\": \"guitib123\"\r\n}"
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "login" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
      },
    "/navbar/getallsections" : {
      "get" : {
        "description" : "Return JSON with all the sections",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "navbar" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/navbar/createsection" : {
      "post" : {
        "description" : "Create a section (need a JSON)",
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "id" : {
                    "type" : "string"
                  }
                }
              },
              "examples" : {
                "0" : {
                  "value" : "{\n    \"id\": \"NEUROLOGY\"\n}"
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "navbar" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/navbar/search" : {
      "post" : {
        "description" : "Given a string, return a Patient or a Bed",
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "searchString" : {
                    "type" : "string"
                  }
                }
              },
              "examples" : {
                "0" : {
                  "value" : "{\n    \"searchString\": \"Guilherme\"\n}"
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "navbar" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/section/bedspersection/{id}" : {
      "get" : {
        "description" : "Return a JSON with beds in a section",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "section" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/section/bedsstatusquantitypersection/{id}" : {
      "get" : {
        "description" : "Given a section ID, return the beds status quantity",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "section" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/section/patient/{id}" : {
      "get" : {
        "description" : "Return a patient JSON",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "section" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/section/bed" : {
      "post" : {
        "description" : "Create a new Bed",
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "name" : {
                    "type" : "string"
                  },
                  "section" : {
                    "type" : "string"
                  },
                  "type" : {
                    "type" : "string"
                  }
                }
              },
              "examples" : {
                "0" : {
                  "value" : "{\r\n    \"name\": \"A6\",\r\n    \"type\": \"COMMON\",\r\n    \"section\": \"PEDIATRY\"\r\n}"
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "section" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "put" : {
        "description" : "Update bed (Need JSON)",
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "id" : {
                    "type" : "string"
                  },
                  "status" : {
                    "type" : "string"
                  }
                }
              },
              "examples" : {
                "0" : {
                  "value" : "{\n    \"id\": \"df589863-f3a9-40c9-88b4-d1ce3826f93c\",\n    \"status\": \"CLEANING_NEEDED\"\n}"
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "section" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "delete" : {
        "description" : "Delete bed (Need JSON)",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "section" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/section/patient" : {
      "post" : {
        "description" : "Create a new patient (Need JSON)",
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "sex" : {
                    "type" : "string"
                  },
                  "bedId" : {
                    "type" : "string"
                  },
                  "last_name" : {
                    "type" : "string"
                  },
                  "diagnosis" : {
                    "type" : "array",
                    "items" : {
                      "type" : "string"
                    }
                  },
                  "additional_informations" : {
                    "type" : "string"
                  },
                  "first_name" : {
                    "type" : "string"
                  },
                  "age" : {
                    "type" : "integer"
                  },
                  "ssn" : {
                    "type" : "string"
                  }
                }
              },
              "examples" : {
                "0" : {
                  "value" : "{\r\n    \"age\": 21,\r\n    \"sex\":\"MALE\",\r\n    \"first_name\":\"Malas\",\r\n    \"last_name\":\"lulis\",\r\n    \"ssn\":\"12341512887\",\r\n    \"additional_informations\":\"EXAUSTÃO APOS PASSAR 3 DIAS NO RPG DO DEMONIO,NEW WORLD\",\r\n    \"bedId\":\"df589863-f3a9-40c9-88b4-d1ce3826f93c\",\r\n    \"diagnosis\":[\"NEUROLOGY\"]\r\n}"
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "section" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "put" : {
        "description" : "Update patient (Need JSON)",
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "patientId" : {
                    "type" : "string"
                  },
                  "age" : {
                    "type" : "integer"
                  }
                }
              },
              "examples" : {
                "0" : {
                  "value" : "{\n    \"patientId\": \"84472eaf-eb0f-4471-86fc-bab3cb17788e\",\n    \"age\": 54\n}"
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "section" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "delete" : {
        "description" : "Delete patient (Need JSON)",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "section" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/dashboard/bedspercentageperstatus" : {
      "get" : {
        "description" : "Return a count of beds per status",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "dashboard" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/dashboard/bedsquantityperstatus" : {
      "get" : {
        "description" : "Auto generated using Swagger Inspector",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "dashboard" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/dashboard/patientquantityperdiagnosis" : {
      "get" : {
        "description" : "Return JSON with count of patient per diagnosis",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "dashboard" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/dashboard/patientquantitypersex" : {
      "get" : {
        "description" : "Return JSON with count of patient per sex",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "dashboard" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/dashboard/patientquantityperage" : {
      "get" : {
        "description" : "Return JSON with count of patient per Age (range)",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "dashboard" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/dashboard/dailyinandouts" : {
    "get" : {
      "description" : "Return In and Outs for a Day",
      "responses" : {
        "200" : {
          "description" : "Auto generated using Swagger Inspector",
          "content" : {
            "application/json; charset=utf-8" : {
              "schema" : {
                "type" : "string"
              },
              "examples" : { }
            }
          }
        }
      },
      "tags" : [ "dashboard" ],
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "servers" : [ {
      "url" : "https://leithos-navin.herokuapp.com"
    } ]
    },
    "/dashboard/weeklyinandouts" : {
      "get" : {
        "description" : "Return In and Outs for a Week",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "dashboard" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/dashboard/monthlyinandouts" : {
      "get" : {
        "description" : "Return In and Outs for a Month",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "dashboard" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/dashboard/yearlyinandouts" : {
      "get" : {
        "description" : "Return In and Outs for a Year",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "dashboard" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/dashboard/bedsquantityperstatusandsection" : {
      "get" : {
        "description" : "Return JSON with beds count per status in a section",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "dashboard" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/dashboard/averagetimeperfuncionality" : {
      "get" : {
        "description" : "Return JSON with average time per status",
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "dashboard" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    },
    "/register" : {
      "post" : {
        "description" : "Register a new USER (need JSON)",
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "password" : {
                    "type" : "string"
                  },
                  "phone" : {
                    "type" : "string"
                  },
                  "last_name" : {
                    "type" : "string"
                  },
                  "first_name" : {
                    "type" : "string"
                  },
                  "email" : {
                    "type" : "string"
                  }
                }
              },
              "examples" : {
                "0" : {
                  "value" : "{\r\n    \"first_name\": \"Malu\",\r\n    \"last_name\": \"Melo\",\r\n    \"email\": \"xa@gmail.com\",\r\n    \"password\": \"1234\",\r\n    \"phone\": \"1111111\"\r\n}"
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "Auto generated using Swagger Inspector",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : { }
              }
            }
          }
        },
        "tags" : [ "register" ],
        "servers" : [ {
          "url" : "https://leithos-navin.herokuapp.com"
        } ]
      },
      "servers" : [ {
        "url" : "https://leithos-navin.herokuapp.com"
      } ]
    }
},
  "components" : {
    "securitySchemes" : {
      "bearerAuth" : {
        "type" : "http",
        "scheme" : "bearer",
        "bearerFormat" : "JWT"
      }
    }
  },
  "security" : [ {
    "bearerAuth" : [ ]
  } ]
}

