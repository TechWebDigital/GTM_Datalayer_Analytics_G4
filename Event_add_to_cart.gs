
//IMPLEMENTARE EVENT ADAUGARE PRODUS IN COS
//Event add_to_cart care sa impinga informatii despre produsele adaugate in cos. 

dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "add_to_cart",
  ecommerce: {
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
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",        // Optional fields may be omitted or set to empty string.
      location_id: "L_12345",
      price: 9.99,                                                     // Required 
      quantity: 1                                                      // Required
    }
    ]
  }
});
