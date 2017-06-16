var tasks = [];
function task(description, owner, difficulty)
  {
    this.taskdescription = description;
    this.taskowner = owner;
    this.taskdifficulty = difficulty;
  }

function AddTask()
  {
    var desc = document.getElementById('description').value;
    form = document.getElementById('mainform');
    var person = form.elements["person"].value;
    var difficulty = document.getElementById('difficulty').value;

    var newTask = new task(desc, person, difficulty);
    tasks.push(newTask);
    UpdateList();
  }

function UpdateList()
  {
    var CountB = 0;
    var CountS = 0;
    var CountG = 0;
    var CountU = 0;

    var mylist = document.getElementById("tasklist");
    mylist.innerHTML = "";
    for (var i = 0, length = tasks.length; i < length; i++)
      {
        var item = document.createElement("li");
        item.innerHTML = "Description: " + tasks[i].taskdescription +
        " <br>Owner: " + tasks[i].taskowner +
        " <br> Difficulty: " + tasks[i].taskdifficulty;
        mylist.appendChild(item);

        switch(tasks[i].taskowner)
          {
            case 'Brian':
                CountB++;
                break;
            case 'Steve':
                CountS++;
                break;
            case 'Guillermo':
                CountG++;
                break;
            case '':
                CountU++;
                break;
          }
      }
      drawChart('Brian', 'Steve', 'Guillermo', CountB, CountS, CountG, CountU);
  }
