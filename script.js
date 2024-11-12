let fieldCounter = 0;

// function for text field creation
$('#addTextField').click(function() {
    fieldCounter++;
    $('#formFieldsContainer').append(`
        <div class="field-container" id="field-${fieldCounter}">
            <label>Text Field ${fieldCounter}</label>
            <input type="text" name="field-${fieldCounter}">
            <button type="button" class="removeField" data-id="${fieldCounter}">Remove</button>
        </div>
    `);
});

// function for select field creation
$('#addSelectField').click(function() {
    fieldCounter++;
    $('#formFieldsContainer').append(`
        <div class="field-container" id="field-${fieldCounter}">
            <label>Select Field ${fieldCounter}</label>
            <select name="field-${fieldCounter}">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
            </select>
            <button type="button" class="removeField" data-id="${fieldCounter}">Remove</button>
        </div>
    `);
});

// function for removing the input fields
$(document).on('click', '.removeField', function() {
    const id = $(this).data('id');
    $(`#field-${id}`).remove();
});

// table creation function
$('#customForm').submit(function(e) {
    e.preventDefault();
    const formData = {};
    $('#formFieldsContainer').find('input, select').each(function() {
        const fieldName = $(this).attr('name');
        formData[fieldName] = $(this).val();
    });

    // table header creation
    if ($('#tableHeader').is(':empty')) {
        let headerRow = '<tr>';
        for (const key in formData) {
            headerRow += `<th>${key}</th>`;
        }
        headerRow += '</tr>';
        $('#tableHeader').append(headerRow);
    }

    // table column creation
    let dataRow = '<tr>';
    for (const key in formData) {
        dataRow += `<td>${formData[key]}</td>`;
    }
    dataRow += '</tr>';
    $('#tableBody').append(dataRow);
});