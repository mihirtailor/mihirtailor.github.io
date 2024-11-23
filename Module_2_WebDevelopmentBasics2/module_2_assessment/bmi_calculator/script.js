let isMetric = true;

document.querySelectorAll('input[name="units"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    isMetric = this.value === "metric";
    updateUnitLabels();
  });
});

function updateUnitLabels() {
  document.getElementById("weight-unit").textContent = isMetric ? "kg" : "lbs";
  document.getElementById("height-unit").textContent = isMetric ? "cm" : "in";
}

document.getElementById("bmi-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if (!isMetric) {
    // Convert lbs to kg
    weight = weight * 0.453592;
    // Convert inches to meters
    height = height * 0.0254;
  } else {
    // Convert cm to meters
    height = height / 100;
  }

  const bmi = calculateBMI(weight, height);
  const category = getBMICategory(bmi);

  displayResult(bmi, category);
});

function calculateBMI(weight, height) {
  return (weight / (height * height)).toFixed(2);
}

function getBMICategory(bmi) {
  if (bmi <= 18.5) return "Underweight";
  if (bmi <= 24.9) return "Normal weight";
  if (bmi <= 29.9) return "Overweight";
  return "Obese";
}

function displayResult(bmi, category) {
  document.getElementById("bmi-value").textContent = bmi;
  document.getElementById("bmi-category").textContent = category;
  document.getElementById("result").classList.remove("d-none");

  // Highlight the corresponding category in the chart
  document
    .querySelectorAll(".bmi-category")
    .forEach((el) => el.classList.remove("active"));
  document
    .getElementById(category.toLowerCase().replace(" ", ""))
    .classList.add("active");
}

// Initialize unit labels
updateUnitLabels();
