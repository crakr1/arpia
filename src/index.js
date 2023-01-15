import '@laylazi/bootstrap-rtl-scss/dist/css/bootstrap-rtl.min.css';
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
// import "bootstrap";
import "./css/style.css";
import 'webpack-jquery-ui';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all';

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip()

    $(".add-but").click(function(){
        alert ("اضيف المنتج الى عربة الشراء");
    });

    $('.product-option input[type="radio"]').change(function(){
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

    $('[data-product-quantity]').change(function(){
        var newQuantity= $(this).val();
        var parent = $(this).parents('[data-product-info]');
        var pricePerUnit = parent.attr('data-product-price');
        var totalPrice = newQuantity * pricePerUnit;
        parent.find('.total-price').text(totalPrice + '$');

        calculateTotalPrice();
    });

    $('[data-remove-from-cart]').click(function(){
        $(this).parents('[data-product-info]').remove();
        calculateTotalPrice();
    });



    function calculateTotalPrice() {
        var totalPriceForAllProducts = 0 ;
        $('[data-product-info]').each(function(){
            var pricePerUnit = $(this).attr('data-product-price');
            var quantity = $(this).find('[data-product-quantity').val();
            var totalPriceForProduct = pricePerUnit * quantity ;
            totalPriceForAllProducts = totalPriceForAllProducts +totalPriceForProduct;
        });
        $('#total-price-all').text (totalPriceForAllProducts +'$');
    };

    var citiesByCountry ={
        sa :['جده ','الرياض'],
        eg : ['القاهره','الاسكندريه'],
        jo :['عمان','الزرقا'],
        sy :['حلب','دمشق']
    };

    $('#form-checkout select[name= "country"]').change(function (){

        var country = $(this).val();

        var cities = citiesByCountry[country];

        $('#form-checkout select[name="city"]').empty();

        $('#form-checkout select[name="city"]').append(
            '<option disabled selected value="">اخنر المدينه</option>'
        );

        cities.forEach(function(city){
            var newOption = $('<option></option>');
            newOption.text(city);
            newOption.val(city)
            $('#form-checkout select[name="city"]').append(newOption);
        });
    });

    $('#form-checkout input[name="payment"]').change(function(){

        var payment = $(this).val();

        if(payment === 'on-delivery'){

            $('#credit-card-info input').prop('disabled', true);

        } else {

            $('#credit-card-info input').prop('disabled', false);
            
        }

        $('#credit-card-info').toggle();
    })

});


