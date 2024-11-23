# GPA Calculator

This is a simple web-based GPA (Grade Point Average) calculator that allows users to input their grades and calculate their GPA.

## Live Preview

You can try out the GPA Calculator here: [GPA Calculator Live Preview](https://mihirtailor.github.io/Module_1_WebDevelopmentBasics1/module_assessment/gpa_calculator/)

## Features

- Input grades as a comma-separated list
- Calculates GPA based on the entered grades
- Displays the result as an alphabetic GPA (A, B, C, or F)

## How to Use

1. Open the `index.html` file in a web browser or use the live preview link above.
2. Enter your grades in the input field, separated by commas (e.g., A,B,C).
3. Click the "Calculate GPA" button.
4. Your GPA will be displayed below the button.

## Grade Conversion

The calculator uses the following grade conversion table:

- A: 100 points
- B: 80 points
- C: 70 points
- Any other grade: 0 points

## GPA Calculation

The GPA is calculated as follows:

1. Convert each grade to its numeric equivalent.
2. Calculate the average of the numeric grades.
3. Convert the average back to an alphabetic GPA:
   - 90-100: A
   - 80-89: B
   - 70-79: C
   - Below 70: F

## Technologies Used

- HTML
- JavaScript

## File Structure

- `index.html`: Contains the HTML structure and JavaScript code for the GPA calculator.

## Future Improvements

- Add CSS styling for a better user interface
- Implement a more comprehensive grading scale
- Allow users to input course credits for a weighted GPA calculation
