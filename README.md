# Dynamic Form Builder

Dynamic Form Builder is a JavaScript project that allows users to dynamically add and remove text and select fields in a form, with options to customize `select` fields by adding new options. When the form is submitted, the data displays in a table that only appears if data has been submitted.

## 📖 Description

This project provides a flexible way to build forms where users can add text and `select` fields dynamically, remove fields as needed, and submit data to generate a table with entries. The table’s headers are generated based on the fields in the form and are only visible if data is present. Default options are available for `select` fields, with the ability for users to add custom options.

## ⚙️ Technologies

The project uses:
- **jQuery** for event handling, form manipulation, and modal functionality.
- **HTML** and **CSS** for layout and styling of the form, modal, and data table.

## 🚀 Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/li-mikhail/FH-Demo-Task
   ```
2. Navigate to the project directory:
   ```bash
   cd FH Demo Task
   ```
3. Open `index.html` in a browser to start using the Dynamic Form Builder.

## 🛠 How It Works

1. **Add Form Fields**: Users can add new text or `select` fields by clicking the corresponding buttons. Each field is given a unique ID for easy reference. `Select` fields come with default options (`Default 1`, `Default 2`, `Default 3`).
2. **Custom Options for Select Fields**: Users can add custom options to `select` fields by clicking the “Add Option” button, which opens a modal window for entering the option text.
3. **Remove Fields**: Each field includes a “Remove” button for easy deletion.
4. **Submit Data**: Upon form submission, data from each field is captured and displayed in a table with headers for both text and `select` fields. The table is only shown when data is present.

## 🔧 Configuration and Key Variables

- **fieldCounter**: This counter is used to generate unique IDs for each added field.
- **currentSelectId**: Stores the ID of the currently active `select` field for adding custom options.
- **formFieldsContainer**: The container where new form fields are appended.
- **tableHeader** and **tableBody**: HTML elements for displaying submitted form data in a tabular format.

## 🚨 Dependencies

- **jQuery** is required and should be included in the `index.html` file to enable event handling and dynamic manipulation.

## 🖋 Author

- [Mikhail Li](https://github.com/li-mikhail) - Project Author

This README provides a comprehensive overview of the Dynamic Form Builder, enabling flexible form creation with on-the-fly customization and dynamic data presentation.