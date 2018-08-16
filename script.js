var todoList = document.getElementById('todoList');
      var tasks = [];

      function loadMemory(){
        if(localStorage['tasks'] != null) {
          todoList.innerHTML = "";
          tasks = JSON.parse(localStorage["tasks"] || "[]");
          tasks.forEach(printli);
        }
      }

      function printli(task, index) {
        todoList.innerHTML += "<li class='list-group-item list-group-item-action'>" + task["details"] + "<button type='button' class='close' onclick='removeEvent(" + index + ")'><span aria-hidden='true'>&times;</span></button><br><small> | " + task["dateAndTime"] + "</small></li>";
      }

      function addEvent() {
        var textInput = document.getElementById('textInput').value;
        if(textInput == "") {
          alert("Enter somethings into text feild");
        }else {
          var timeDate = getDateTime(); 
          var task = {
            'dateAndTime' : timeDate,
            'details' : textInput
          };
          tasks.push(task);
          localStorage["tasks"] = JSON.stringify(tasks);
          document.getElementById('textInput').value = "";
          loadMemory();
        }
      }

      function removeEvent(id) {
        let confimation = confirm("Do you want to delete this event?");
        if(confimation) {
          tasks.splice(id, 1);
          localStorage["tasks"] = JSON.stringify(tasks);
          loadMemory();
        }else{
          alert("The event is in safe");
        }
      } 

      function handleEnter(e){
          var keycode = (e.keyCode ? e.keyCode : e.which);
          if (keycode == '13') {
              addEvent();
          }
      }

      function getDateTime() {
        var now     = new Date(); 
        var year    = now.getFullYear();
        var month   = now.getMonth()+1; 
        var day     = now.getDate();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds(); 
        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }   
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }   
        var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
        return dateTime;
      }

      function printArry(n){
        if(n==0) {
          console.log(tasks);
        }else {
          console.log(localStorage["tasks"]);
        }
      }