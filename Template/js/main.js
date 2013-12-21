$(document).ready(function() {
    
	var itemTxt = $('.cartCount strong').text();
	var totalCost = $('.cartCost strong').text();
        if(totalCost.length != 0) {
	$('.CartLink span').html(itemTxt+' Items / '+totalCost);
        }
        
	var hash = window.location.hash;
	if (hash == '#ProductReviews' || hash == '#write_review') {
		$('#ProductReviews').find('.subtitle').trigger('click');
	}
	
	$('.wishTrigger').click(function() {
		$('#frmWishList').submit();
	});

	$('input[type=text],input[type=url],input[type=email],input[type=password]').focus(function () {
		if ($(this).val() == $(this).attr("title")) {
			$(this).val("");
		}
	}).blur(function () {
		if ($(this).val() == "") {
			$(this).val($(this).attr("title"));
		}
	});
	$(".SubTotal td strong:contains('Grand Total:')").closest('tr').addClass('gtotal');
	
	
	
	var onsale = $(".ProductDetailsGrid .DetailRow.PriceRow .Value em");
	if(onsale.children('strike').length > 0 ){
		onsale.addClass("on-sale");
	}
	
	
	
	var shopPath = config.ShopPath;
	var win = window.location.pathname;
  	var Maddr = win.toLowerCase().replace(shopPath, ''); // remove the shop path because some links dont have it
	$('.Breadcrumb ul').last().addClass('last');
	//$('.Breadcrumb ul').not('.last').remove();
	var breadLink;
	if ($('.Breadcrumb li:nth-child(2)').children('a').size() != 0) {
		breadLink = $('.Breadcrumb ul.last li:nth-child(2)').children('a').attr('href').toLowerCase().replace(shopPath, '');	
	}
	
	$('#Menu .category-list').addClass('page');
	//$('#Menu .category-list').prepend('<li class=""><a href="'+shopPath+'/">Home</a></li>')
	// add active class to category sidebar
	
	
	
	$("#SideCategoryList li a").each(function() {
			
    	var ChrefX = $(this).attr('href').toLowerCase().replace(shopPath, ''); // remove shop path if any because some links dont have it
		
		if (Maddr==ChrefX) {
			$(this).closest('.parent').children('a').addClass("active"); //if the window location is equal side menu href
			
		} 
		
	});

	// add active class to menu	
	$(".category-list.page a").each(function() {
			
    	var MhrefX = $(this).attr('href').toLowerCase().replace(shopPath, ''); // remove shop path if any because some links dont have it
		
	
		
	
		if (Maddr==MhrefX) {
			
			
			$(this).closest('.parent').addClass("ActivePage"); //if the window location is equal side menu href
			
		} 
		if (breadLink == MhrefX) {
			$(this).closest('.parent').addClass("ActivePage");
		}
		
		
	});
	
	if($('input[type="checkbox"]').is(":visible")){
		$('input[type="checkbox"]').not('#category input[type="checkbox"]').uniform();
	}
	if($('input[type="radio"]').is(":visible")){
		$('input[type="radio"]').not('.productOptionPickListSwatch input[type="radio"], .productOptionViewRectangle input[type="radio"]').uniform();
	}
	
	$('select').not('select#FormField_12, .UniApplied').uniform({ selectAutoWidth: false });
	$('input[type="file"]').uniform();  
	
	//currency display
   var currentCurrency = $('#currencyPrices').html();
   currentCurrency = currentCurrency.substring(0,currentCurrency.length - 1);
   $('.currency-converter p').html(currentCurrency);
   
   var currentCurrencyF = $('.CurrencyList').find('.Sel').html();
   $('.selected-currency').html(currentCurrencyF);	
   
	$('.currency-converter').hover(function() {
		$(this).children(".CurrencyChooser").stop(true,true).show();
		$('.selected-currency').click(function() {
			var curDisplay = $(this).siblings("div").children(".CurrencyList");
			if(curDisplay.is(":visible")){
				curDisplay.hide();
			} else {
				curDisplay.slideDown();
			}
		});
	},function() {
		$(this).children(".CurrencyChooser").hide();
		$(this).children("div").children("div").children('.CurrencyList').stop(true,true).hide();
	});
	
	
	
	$("#wishlistsform a:contains('Share')").each(function() {
		$(this).attr('title', 'Share Wishlist');
	})
	
	
	$('#selectAllWishLists').click(function() {
		$.uniform.update(); 
	});
	
	
	// menu adjust
	$("#Menu ul > li").each(function() {
		$(this).addClass('parent');
	});	
	$(".PageMenu .category-list  > li").each(function() {
		$(this).addClass('parent');
    
    	tallest = 0;
   	 	group =  $(this).find('ul');
    
		group.each(function() {
			thisHeight = $(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	});
	
	$('.PageMenu li').each(function() {
		if ($(this).children('ul').size() != 0) {
			$(this).children('a').addClass('hasSub');	
		}
	});
	$('.PageMenu li').hover(function() {
		$(this).addClass('over');
		return false;
	}, function() {
		$(this).removeClass('over');
	});
	var num = $('.PageMenu .parent').size(); 
	$('.category-list .parent').each(function(i) {
        $(this).css('z-index', num - i);
  	});
  	$('.PageMenu #Menu .parent').each(function(i) {
        $(this).css('z-index', num - i);
  	});
	
	
	
	
	
	$('.FormFieldLabel').each(function() {
		$(this).text($(this).text().replace(/:/g,"")); 
	});
});


function ToggleShippingEstimation2(){
		var $container = $(".EstimateShipping");
		$('.EstimatedShippingMethods').hide();
		
		
		if ($container.is( ":hidden" )){
			// Show - slide down.
			$('.EstimateShippingLink').hide();	
			$container.slideDown(300, function() {
				
			});	
			$('.EstimateShipping select:eq(0)').focus();
			//$('#shippingZoneState:not(".UniApplied")').uniform();
			if ($('#shippingZoneState').is(':hidden')) {
				$('#uniform-shippingZoneState').hide();
			}
		 
		} else {
		 
			// hide - slide up.
			
			$container.slideUp(300, function() {
				$('.EstimateShippingLink').show();	
			});	
		
		 
		}
		

};
	