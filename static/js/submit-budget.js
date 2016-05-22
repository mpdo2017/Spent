/* global $*/
"use strict";

function replaceBudget(results) {

    updateBudgetMinusExpenses(results);

    var budget = results;
    var stringToAppend = '<form action="/remove-budget/' + String(budget.id) +
      '" method="POST" id="category-' + String(budget.category_id) + '">' +
      '<li>' +
      String(budget.budget) +
      '<br>' +
      String(budget.category) +
      '<br>' +
      '</li>' +
      '<input type="Submit" value="Remove">' +
      '</form>';

    console.log(stringToAppend);

    var categoryElement = $('#category-' + String(budget.category_id));

    console.log(categoryElement);

    if (categoryElement.length > 0) {
      categoryElement.replaceWith(stringToAppend);
    } else {
      $('#budget-div').append(stringToAppend);
      console.log(results);
      console.log("Finished replaceBudget");
    }
}

function updateBudgetMinusExpenses(results) {

  var budget = results;
  var stringToAppend = String(budget.cat_budget_minus_expenses);

  var budgetElement = $('#budget-left-' + String(budget.category_id));

  budgetElement.html(stringToAppend);
  console.log("finished updateBudgetMinusExpenses");

}

function updateBudget(evt) {
    evt.preventDefault();

    var budget = $('#budget-form').serialize();

    $.post('/add-budget', budget, replaceBudget);
    console.log("Finished sending AJAX");
}

$('#budget-submit').click(updateBudget);




// <div id="budget-div">
//     {% for budget in budget %}
//     <form action="/remove-budget/{{ budget.id }}" method="POST" id="category-{{budget.category_id}}">

//     <li>
//         {{ budget.budget }}<br>
//         {{ budget.category.category }}<br>
//     </li>
//         <input type="Submit" value="Remove">
//     </form>

//     {% endfor %}
// </div>



/***

$element = '<form action="/remove-budget/' + id + '" method="POST">';
$element += '<li>';
$element += String(results.budget) + '<br>';




$('#budget-div').append($element);






    <form action="/remove-budget/{{ budget.id }}" method="POST">

    <li>

        {{ budget.budget }}<br>
        {{ budget.category }}<br>
    </li>
        <input type="Submit" value="Remove">
    </form>

***/