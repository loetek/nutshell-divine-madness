(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _events = _interopRequireDefault(require("./events"));

var _friends = _interopRequireDefault(require("./friends"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_friends.default.buildFriendPage(); // template for object to pass into nomadData.connectToData() if you are doing a GET
// let fetchTest = {
//     "dataSet" : "users",
//     "fetchType" : "GET",
//     "dataBaseObject" : "",
//     "embedItem" : "?_embed=events"
// }
// template for object to pass into nomadData.connectToData() if you are doing a POST
// let fetchTest2 = {
//     "dataSet" : "events",
//     "fetchType" : "POST",
//     "dataBaseObject" : {
//       "userId": 1,
//       "eventName": "yet another toga party",
//       "eventDate": "2-12",
//       "eventTime": "3:00pm",
//       "eventLocation": "Vegas"
//     }
// }
// template for object to pass into nomadData.connectToData() if you are doing a PUT
// let fetchTest3 = {
//     "putId" : 2,
//     "dataSet" : "events",
//     "fetchType" : "PUT",
//     "dataBaseObject" : {
//       "id" : 2,
//       "userId": 1,
//       "eventName": "another toga party",
//       "eventDate": "2-15",
//       "eventTime": "3:00pm",
//       "eventLocation": "Vegas"
//     }
// }
// nomadData.connectToData(fetchTest3)

},{"./events":2,"./friends":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const events = {
  currentEvent() {
    console.log("yo");
  }

};
var _default = events;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const friends = {
  buildFriendPage() {
    // PULL FROM FRIENDS JSON-------------------------
    let friendIntersectionTable = {
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };

    _nomadData.default.connectToData(friendIntersectionTable).then(fromFriends => {
      console.log(fromFriends);
      fromFriends.forEach(friendData => {// console.log(friendData)
      });
    }); // PULL FROM USERS JSON -----------------------


    let userInfo = {
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };

    _nomadData.default.connectToData(userInfo).then(fromUserData => {
      console.log(fromUserData);
      fromUserData.forEach(userData => {// console.log(userData)
      });
    });
  }

};
var _default = friends;
exports.default = _default;

},{"./nomadData":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const nomadData = {
  connectToData(fetchObject) {
    let dataSet = fetchObject.dataSet;
    let embedItem = fetchObject.embedItem;
    let fetchType = fetchObject.fetchType;
    let dataBaseObject = fetchObject.dataBaseObject;
    let putId = fetchObject.putId;

    if (fetchType == "GET") {
      return fetch(`http://localhost:8088/${dataSet}${embedItem}`).then(response => response.json()); // parses response to JSON
    } else if (fetchType === "POST") {
      // Default options are marked with *
      return fetch(`http://localhost:8088/${dataSet}`, {
        method: `${fetchType}`,
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        // referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(dataBaseObject) // body data type must match "Content-Type" header

      });
    } else if (fetchType === "PUT") {
      return fetch(`http://localhost:8088/${dataSet}/${putId}`, {
        method: `${fetchType}`,
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        // referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(dataBaseObject) // body data type must match "Content-Type" header

      });
    } else {
      console.log("YOU SCREWED IT UP");
    }
  }

};
var _default = nomadData;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudHMuanMiLCIuLi9zY3JpcHRzL2ZyaWVuZHMuanMiLCIuLi9zY3JpcHRzL25vbWFkRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7Ozs7QUFDQSxpQkFBUSxlQUFSLEcsQ0FFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FDOUNBLE1BQU0sTUFBTSxHQUFHO0FBQ2YsRUFBQSxZQUFZLEdBQUk7QUFDZCxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQWEsSUFBYjtBQUNEOztBQUhjLENBQWY7ZUFNZSxNOzs7Ozs7Ozs7OztBQ05mOzs7O0FBRUEsTUFBTSxPQUFPLEdBQUc7QUFFZCxFQUFBLGVBQWUsR0FBSTtBQUNyQjtBQUNJLFFBQUksdUJBQXVCLEdBQUc7QUFDOUIsaUJBQVksU0FEa0I7QUFFOUIsbUJBQWMsS0FGZ0I7QUFHOUIsd0JBQW1CLEVBSFc7QUFJOUIsbUJBQWM7QUFKZ0IsS0FBOUI7O0FBTUosdUJBQVUsYUFBVixDQUF3Qix1QkFBeEIsRUFDQyxJQURELENBQ00sV0FBVyxJQUFJO0FBQ25CLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsTUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixVQUFVLElBQUksQ0FDaEM7QUFDRCxPQUZEO0FBR0QsS0FORCxFQVJxQixDQWVyQjs7O0FBQ0ksUUFBSSxRQUFRLEdBQUc7QUFDYixpQkFBWSxPQURDO0FBRWIsbUJBQWMsS0FGRDtBQUdiLHdCQUFtQixFQUhOO0FBSWIsbUJBQWM7QUFKRCxLQUFmOztBQU1BLHVCQUFVLGFBQVYsQ0FBd0IsUUFBeEIsRUFDQyxJQURELENBQ00sWUFBWSxJQUFJO0FBQ3BCLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsTUFBQSxZQUFZLENBQUMsT0FBYixDQUFxQixRQUFRLElBQUksQ0FDL0I7QUFDRCxPQUZEO0FBR0QsS0FORDtBQVVEOztBQWxDYSxDQUFoQjtlQXFDZSxPOzs7Ozs7Ozs7O0FDdkNmLE1BQU0sU0FBUyxHQUFHO0FBRWQsRUFBQSxhQUFhLENBQUMsV0FBRCxFQUFjO0FBRXpCLFFBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUExQjtBQUNBLFFBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUE1QjtBQUNBLFFBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUE1QjtBQUNBLFFBQUksY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFqQztBQUNBLFFBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUF4Qjs7QUFFRSxRQUFJLFNBQVMsSUFBSSxLQUFqQixFQUF3QjtBQUV4QixhQUFPLEtBQUssQ0FBRSx5QkFBd0IsT0FBUSxHQUFFLFNBQVUsRUFBOUMsQ0FBTCxDQUNGLElBREUsQ0FDRyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEZixDQUFQLENBRndCLENBR2U7QUFFdEMsS0FMRCxNQUtPLElBQUksU0FBUyxLQUFLLE1BQWxCLEVBQXlCO0FBRWhDO0FBQ0EsYUFBTyxLQUFLLENBQUUseUJBQXdCLE9BQVEsRUFBbEMsRUFBcUM7QUFDN0MsUUFBQSxNQUFNLEVBQUcsR0FBRSxTQUFVLEVBRHdCO0FBQ3JCO0FBQ3hCLFFBQUEsT0FBTyxFQUFFO0FBQ0wsMEJBQWdCLGlDQURYLENBRUw7O0FBRkssU0FGb0M7QUFNN0M7QUFDQSxRQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLGNBQWYsQ0FQdUMsQ0FPUDs7QUFQTyxPQUFyQyxDQUFaO0FBVUMsS0FiTSxNQWFBLElBQUcsU0FBUyxLQUFLLEtBQWpCLEVBQXVCO0FBQzlCLGFBQU8sS0FBSyxDQUFFLHlCQUF3QixPQUFRLElBQUcsS0FBTSxFQUEzQyxFQUE4QztBQUN0RCxRQUFBLE1BQU0sRUFBRyxHQUFFLFNBQVUsRUFEaUM7QUFDOUI7QUFDeEIsUUFBQSxPQUFPLEVBQUU7QUFDTCwwQkFBZ0IsaUNBRFgsQ0FFTDs7QUFGSyxTQUY2QztBQU10RDtBQUNBLFFBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsY0FBZixDQVBnRCxDQU9oQjs7QUFQZ0IsT0FBOUMsQ0FBWjtBQVNDLEtBVk0sTUFVQTtBQUNILE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxtQkFBYjtBQUNIO0FBQ0o7O0FBekNhLENBQWxCO2VBNENpQixTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIjtcbmZyaWVuZHMuYnVpbGRGcmllbmRQYWdlKClcblxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgR0VUXG5cbi8vIGxldCBmZXRjaFRlc3QgPSB7XG5cbi8vICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuLy8gICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJcbi8vIH1cblxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgUE9TVFxuXG4vLyBsZXQgZmV0Y2hUZXN0MiA9IHtcblxuLy8gICAgIFwiZGF0YVNldFwiIDogXCJldmVudHNcIixcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXG4vLyAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuLy8gICAgICAgXCJ1c2VySWRcIjogMSxcbi8vICAgICAgIFwiZXZlbnROYW1lXCI6IFwieWV0IGFub3RoZXIgdG9nYSBwYXJ0eVwiLFxuLy8gICAgICAgXCJldmVudERhdGVcIjogXCIyLTEyXCIsXG4vLyAgICAgICBcImV2ZW50VGltZVwiOiBcIjM6MDBwbVwiLFxuLy8gICAgICAgXCJldmVudExvY2F0aW9uXCI6IFwiVmVnYXNcIlxuLy8gICAgIH1cbi8vIH1cblxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgUFVUXG5cbi8vIGxldCBmZXRjaFRlc3QzID0ge1xuXG4vLyAgICAgXCJwdXRJZFwiIDogMixcbi8vICAgICBcImRhdGFTZXRcIiA6IFwiZXZlbnRzXCIsXG4vLyAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUFVUXCIsXG4vLyAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuLy8gICAgICAgXCJpZFwiIDogMixcbi8vICAgICAgIFwidXNlcklkXCI6IDEsXG4vLyAgICAgICBcImV2ZW50TmFtZVwiOiBcImFub3RoZXIgdG9nYSBwYXJ0eVwiLFxuLy8gICAgICAgXCJldmVudERhdGVcIjogXCIyLTE1XCIsXG4vLyAgICAgICBcImV2ZW50VGltZVwiOiBcIjM6MDBwbVwiLFxuLy8gICAgICAgXCJldmVudExvY2F0aW9uXCI6IFwiVmVnYXNcIlxuLy8gICAgIH1cbi8vIH1cblxuLy8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoZmV0Y2hUZXN0MykiLCJjb25zdCBldmVudHMgPSB7XG5jdXJyZW50RXZlbnQgKCkge1xuICBjb25zb2xlLmxvZyAoXCJ5b1wiKVxufVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVudHMiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiXG5cbmNvbnN0IGZyaWVuZHMgPSB7XG5cbiAgYnVpbGRGcmllbmRQYWdlICgpIHtcbi8vIFBVTEwgRlJPTSBGUklFTkRTIEpTT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbGV0IGZyaWVuZEludGVyc2VjdGlvblRhYmxlID0ge1xuICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXG4gICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wiXG59XG5ub21hZERhdGEuY29ubmVjdFRvRGF0YShmcmllbmRJbnRlcnNlY3Rpb25UYWJsZSlcbi50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgY29uc29sZS5sb2coZnJvbUZyaWVuZHMpXG4gIGZyb21GcmllbmRzLmZvckVhY2goZnJpZW5kRGF0YSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgfSlcbn0pXG4vLyBQVUxMIEZST00gVVNFUlMgSlNPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGxldCB1c2VySW5mbyA9IHtcbiAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxuICAgIH1cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh1c2VySW5mbylcbiAgICAudGhlbihmcm9tVXNlckRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coZnJvbVVzZXJEYXRhKVxuICAgICAgZnJvbVVzZXJEYXRhLmZvckVhY2godXNlckRhdGEgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICAgIH0pXG4gICAgfSlcbiAgICBcblxuICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmcmllbmRzIiwiY29uc3Qgbm9tYWREYXRhID0ge1xuXG4gICAgY29ubmVjdFRvRGF0YShmZXRjaE9iamVjdCkge1xuXG4gICAgICBsZXQgZGF0YVNldCA9IGZldGNoT2JqZWN0LmRhdGFTZXQ7XG4gICAgICBsZXQgZW1iZWRJdGVtID0gZmV0Y2hPYmplY3QuZW1iZWRJdGVtO1xuICAgICAgbGV0IGZldGNoVHlwZSA9IGZldGNoT2JqZWN0LmZldGNoVHlwZTtcbiAgICAgIGxldCBkYXRhQmFzZU9iamVjdCA9IGZldGNoT2JqZWN0LmRhdGFCYXNlT2JqZWN0O1xuICAgICAgbGV0IHB1dElkID0gZmV0Y2hPYmplY3QucHV0SWQ7XG5cbiAgICAgICAgaWYgKGZldGNoVHlwZSA9PSBcIkdFVFwiKSB7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fSR7ZW1iZWRJdGVtfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHBhcnNlcyByZXNwb25zZSB0byBKU09OXG5cbiAgICAgICAgfSBlbHNlIGlmIChmZXRjaFR5cGUgPT09IFwiUE9TVFwiKXtcblxuICAgICAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmKGZldGNoVHlwZSA9PT0gXCJQVVRcIil7XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtwdXRJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cgKFwiWU9VIFNDUkVXRUQgSVQgVVBcIilcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IG5vbWFkRGF0YSJdfQ==
