$(document).ready(function() {
    $('#addTaskBtn').click(function() {
        var taskText = $('#taskInput').val();
        if (taskText) {
            $('#taskList').append('<li>' + taskText + '</li>').listview('refresh');
            $('#taskInput').val('');
        }
    });

    $('#resetTasksBtn').click(function() {
        $('#taskList').empty().listview('refresh');
    });

    $('#taskList').on('swiperight', 'li', function() {
        $(this).toggleClass('completed');
        $('#taskList').listview('refresh');
    });

    $('#taskList').on('swipeleft', 'li', function() {
        $(this).slideUp(function() {
            $(this).remove();
            $('#taskList').listview('refresh');
        });
    });
});