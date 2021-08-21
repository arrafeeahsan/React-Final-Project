<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Site Metas -->
    <title>Edit Regular Accounts</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Site Icons -->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/custom.css">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <div class="text-center">
        <h1 style="font-size: 50px;">Regular Account Edit</h1>
        <form method="post">
        @csrf
        <table class="table">
            <tr>
                <td>Account Name</td>
                <td>
                    <input type="text" name="accountname" value="{{$regular->account_name}}">
                </td>
            </tr>
            <tr>
                <td>Account Number</td>
                <td>
                    <input type="text" name="accountnumber" value="{{$regular->account_number}}">
                </td>
            </tr>
            <tr>
                <td>Account Balance</td>
                <td>
                    <input type="text" name="accountbalance" value="{{$regular->account_balance}}">
                </td>
            </tr>
            <tr>
                <td>Account Type</td>
                <td>
                    <input type="text" name="accounttype" value="{{$regular->account_category}}">
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" name="update" value="Update">
                </td>
            </tr>
        </table>
        </form>
    </div>

    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- ALL PLUGINS -->
    <script src="js/jquery.superslides.min.js"></script>
    <script src="js/bootstrap-select.js"></script>
    <script src="js/inewsticker.js"></script>
    <script src="js/bootsnav.js."></script>
    <script src="js/images-loded.min.js"></script>
    <script src="js/isotope.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/baguetteBox.min.js"></script>
    <script src="js/form-validator.min.js"></script>
    <script src="js/contact-form-script.js"></script>
    <script src="js/custom.js"></script>

</body>



</html>





