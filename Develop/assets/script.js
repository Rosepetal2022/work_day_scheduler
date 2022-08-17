
//display current date/time to top of page
let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
let currentTime = document.getElementById('currentDay')
currentTime.innerHTML = currentDate

// create function to set textarea user input to local storage
$('.saveBtn').on('click', function(){
    let userInput = $(this).siblings('.description').val();
    let scheduleTime = $(this).parent().attr("id");
    
    localStorage.setItem(scheduleTime, userInput);
});

hourOfDay = () => {
      
    // set variable to get the current hour of the day
      let currentTime = moment().hour();
      
      // 
        $('.event-time').each(function (){
        let schedule = parseInt($(this).attr('id').split('hour')[1]);
        let id = $(this).attr('id');
        let saveText = localStorage.getItem(id);
        $(this).children('.description').val(saveText);

        if (schedule < currentTime) {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        
        } else if (schedule === currentTime) {
            $(this).removeClass('future');
            $(this).addClass('present');
            $(this).removeClass('past');

        } else {
            $(this).addClass('future');
            $(this).removeClass('present');
            $(this).removeClass('past');
        };
    });
};

hourOfDay();

