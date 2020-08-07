$(document).ready(() => {
  isO = true;
  isX = false;
  winner = false;
  win = "";

  $("#1").text("");
  $("#2").text(" ");
  $("#3").text("  ");
  $("#4").text("   ");
  $("#5").text("    ");
  $("#6").text("     ");
  $("#7").text("       ");
  $("#8").text("        ");
  $("#9").text("         ");
  $(".reset").hide();

  $(".box").one("click", () => {
    ontap(event.target.id);
    if( winner == false) {
      playing();
      checkWinner();
    }
    if (winner == true) {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      $(".winner").text("WINNER " + win);
      $(".reset").show();
      $(".reset").click(() => {
        location.reload(true);
      });
    } 
  });

  function checkWinner() {
    var cell1 = $("#1").text().toString();
    var cell2 = $("#2").text().toString();
    var cell3 = $("#3").text().toString();
    var cell4 = $("#4").text().toString();
    var cell5 = $("#5").text().toString();
    var cell6 = $("#6").text().toString();
    var cell7 = $("#7").text().toString();
    var cell8 = $("#8").text().toString();
    var cell9 = $("#9").text().toString();

    //Rows
    if (cell1 === cell2 && cell2 === cell3) {
      win = cell1;
      winner = true;
    } else if (cell4 === cell5 && cell5 === cell6) {
      win = cell4;
      winner = true;
    } else if (cell7 === cell8 && cell8 === cell9) {
      win = cell7;
      winner = true;
    }
    //Columns
    if (cell1 === cell4 && cell4 === cell7) {
      win = cell1;
      winner = true;
    } else if (cell2 === cell5 && cell5 === cell8) {
      win = cell2;
      winner = true;
    } else if (cell3 === cell6 && cell6 === cell9) {
      win = cell3;
      winner = true;
    }
    //Diagonals
    if (cell1 === cell5 && cell5 === cell9) {
      win = cell1;
      winner = true;
    } else if (cell7 === cell5 && cell5 === cell3) {
      win = cell7;
      winner = true;
    }
  }

  function ontap(elementID) {
    if (isX) {
      if(winner === false){
        $("#" + elementID).text("X");
      }
      isO = true;
      isX = false;
      return;
    }
    if (isO) {
      if(winner === false){
        $("#" + elementID).text("O");
      }
      isX = true;
      isO = false;
      return;
    }
  }

  function playing() {
    if (isX) {
      $(".player").text("O");
    } else if (isO) {
      $(".player").text("X");
    } else {
      $(".player").text("");
    }
  }
});
