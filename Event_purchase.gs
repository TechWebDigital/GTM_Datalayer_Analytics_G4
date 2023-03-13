//IMPLEMENTARE EVENT COMANDA FINALIZATA
//Event purchase care sa impinga informatii despre valoarea totala a produselor cumparate cat si informatii efectiv despre produsele achizitionate.

dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({`
  event: "purchase",
  ecommerce: {
      transaction_id: "T_12345",                            // Required
      affiliation: "Google Merchandise Store",        // Required
      value: 25.42,                                                  // Required
      tax: 4.90,                                                        // Required
      shipping: 5.99,                                                // Required
      currency: "USD",                                            // Required
      coupon: "SUMMER_SALE",
      items: [
       {
      item_id: "SKU_12345",                                   // Required
      item_name: "Stan and Friends Tee",              // Required
      affiliation: "Google Merchandise Store",         // Required
      coupon: "SUMMER_FUN",
      currency: "USD",                                            // Required
      discount: 2.22,
      index: 0,
      item_brand: "Google",                                    // Required
      item_category: "Apparel",                              // Required
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",                  // Optional fields may be omitted or set to empty string.
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "L_12345",
      price: 9.99,                                                     // Required 
      quantity: 1                                                      // Required
      },
      {
        item_id: "SKU_12346",
        item_name: "Google Grey Women's Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        currency: "USD",
        discount: 3.33,
        index: 1,
        item_brand: "Google",                                    // Required
        item_category: "Apparel",                              // Required
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "green",
        location_id: "L_12345",
        price: 9.99,                                                     // Required 
        quantity: 1                                                      // Required
        }]
    }
enhanced_conversion_data: {
      email : "ion.popescu@gmail.com",   // Required 
      phone_number: "072412345678",    // Required 
      first_name: "Ion",                               // Required 
      last_name: "Popescu",                      // Required 
      home_adress: {
           street: "Dumbrava Noua nr 1",    // Required 
           city: "Ploiesti",                             // Required 
           region: "Prahova",                       // Required 
           postal_code: "105556",               // Required 
           country: "Romania",                    // Required 
       }
   }
  });
