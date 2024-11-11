# Dynamic Form Builder

Dynamic Form Builder is a JavaScript project that allows users to dynamically add and remove text and select fields in a form, then submit the form data to generate a table of entries.

## 📖 Description

This project enables users to create custom form fields (text and select inputs) on the fly. Each field can be removed individually, and when the form is submitted, the input data is displayed in a table. The table header is dynamically generated based on the form fields, ensuring flexibility for various forms.

## ⚙️ Technologies

The project uses:
- **jQuery** for event handling and dynamic element manipulation.
- **HTML** and **CSS** for structure and styling of the form and table.

## 🚀 Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/li-mikhail/FH-Demo-Task
   ```
2. Navigate to the root of the project directory:
   ```bash
   cd FH Demo Task
   ```
3. Open `index.html` in a browser to start using the form builder.

## 🛠 How It Works

1. **Add Form Fields**: Users can add new text or select fields to the form by clicking the respective buttons. Each field is assigned a unique ID for easy identification.
2. **Remove Fields**: Fields can be removed individually with the "Remove" button next to each input.
3. **Submit Data**: On form submission, the data is captured and added to a table. The header row is generated based on the fields created, and each subsequent submission adds a new row of data to the table.

## 🔧 Configuration

- **fieldCounter**: A counter used to assign unique IDs to each added form field.
- **formFieldsContainer**: The container where new form fields are appended.
- **tableHeader** and **tableBody**: Elements used to display the submitted form data in a tabular format.

## 🚨 Dependencies

- **jQuery** is required for this project and should be included in `index.html`.

## 🖋 Author

- [Mikhail Li](https://github.com/li-mikhail) - Project Author.