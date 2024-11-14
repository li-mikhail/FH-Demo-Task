let fieldCounter = 0;
let currentSelectId = null;

// Function for creation the text form
$('#addTextField').click(function() {
    fieldCounter++;
    $('#formFieldsContainer').append(`
        <div class="field-container" id="field-${fieldCounter}">
            <label>Text Field ${fieldCounter}</label>
            <input type="text" name="text-field-${fieldCounter}">
            <button type="button" class="removeField" data-id="${fieldCounter}">Remove</button>
        </div>
    `);
});

// Function for creation the select form with add button
$('#addSelectField').click(function() {
    fieldCounter++;
    $('#formFieldsContainer').append(`
        <div class="field-container" id="field-${fieldCounter}">
            <label>Select Field ${fieldCounter}</label>
            <select name="select-field-${fieldCounter}">
                <option value="" disabled selected>Select an option</option>
                <option value="Default 1">Default 1</option>
                <option value="Default 2">Default 2</option>
                <option value="Default 3">Default 3</option>
            </select>
            <button type="button" class="addOption" data-id="${fieldCounter}">Add Option</button>
            <button type="button" class="removeField" data-id="${fieldCounter}">Remove</button>
        </div>
    `);
});

// Opening the modal window for adding new option
$(document).on('click', '.addOption', function() {
    currentSelectId = $(this).data('id');
    $('.modal-overlay, #addOptionModal').show();
});

// Closing the modal window for adding new option
$('#cancelOption').click(function() {
    $('.modal-overlay, #addOptionModal').hide();
    $('#optionText').val('');
});

// Saving the user's option and adding to select form
$('#saveOption').click(function() {
    const optionText = $('#optionText').val();
    if (optionText) {
        $(`#field-${currentSelectId} select`).append(`<option value="${optionText}">${optionText}</option>`);
        $('#optionText').val('');
        $('.modal-overlay, #addOptionModal').hide();
    }
});

// Removing the field
$(document).on('click', '.removeField', function() {
    const id = $(this).data('id');
    $(`#field-${id}`).remove();
});

// Function for updating (redrawing) the headers of the table
function updateTableHeader() {
    $('#tableHeader').empty();
    let headerRow = '<tr>';
    headerRow += `<th>Text Fields</th>`;
    headerRow += `<th>Select Fields</th>`;
    headerRow += '</tr>';
    $('#tableHeader').append(headerRow);
}

// Form submission
$('#submitForm').submit(function(e) {
    e.preventDefault();
    let textValues = '';
    let selectValues = '';

    // Collecting all data from added text forms
    $('#formFieldsContainer').find('input[type="text"]').each(function() {
        textValues += $(this).val() ? $(this).val() + ' ' : '';
    });

    // Collecting all data from select text forms
    $('#formFieldsContainer').find('select').each(function() {
        selectValues += $(this).val() ? $(this).val() + ' ' : '';
    });

    // If there is no added data the table will not be shown
    if (!textValues.trim() && !selectValues.trim()) {
        $('#tableHeader').empty();
        $('#tableBody').empty();
        $('table').hide();
        return;
    }

    // Updating the table headers and showing the table
    updateTableHeader();
    $('table').show();

    // Creation of the row of the table
    let dataRow = '<tr>';
    dataRow += `<td>${textValues.trim() || ''}</td>`; // It will empty if the data wasn't added
    dataRow += `<td>${selectValues.trim() || ''}</td>`; // It will empty if the data wasn't added
    dataRow += '</tr>';
    $('#tableBody').append(dataRow);
});
