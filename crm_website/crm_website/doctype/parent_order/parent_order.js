// Copyright (c) 2023, asawari and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Parent Order', {
// 	// Add your event handlers for the 'Parent Order' form here
// });

// Copyright (c) 2023, asawari and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Child Order', {
//     item_type: function(frm) {
//         frm.fields_dict['category'].get_query = function(doc, cdt, cdn) {
//             return {
//                 filters: [
//                     ["Food Category List", "type", "=", "veg"]
//                 ]
//             };
//         };
//     }
// });


// frappe.ui.form.on('Child Order', {
//     setup: function(frm) {
//         frm.set_query("item_type", "order_details", function(doc, cdt, cdn) {
//             let d = locals[cdt][cdn];
//             return {
//                 filters: {
//                     'type': d.item_type
//                 }
//             };
//         });
//     }
// });

// frappe.ui.form.on('Child Order', {
   
//     item_type: function(frm) {
//         // frappe.msgprint('hello');
//         frm.set_query("item_type", "category", function(doc, cdt, cdn) {
//             let d = locals[cdt][cdn];
//             return {
//                 filters: {
//                     'item_type': d.type
//                 }
                
//             };
//         });
//         frappe.msgprint("hi"); 
//     }
// });


// frappe.ui.form.on('Parent Order ', {
//     refresh: function(frm) {
//         frm.fields_dict['quantity'].$input.on('change', function() {
//             frappe.msgprint("hhh")
//             // Get the quantity and price fields' values
//             var quantity = frm.doc.quantity;
//             var price = frm.doc.price; // Replace with the actual fieldname for price

//             // Calculate the total price
//             var total_price = quantity * price;

//             // Set the total price field with the calculated value
//             frm.set_value('total_price_fieldname', total_price); // Replace with the actual fieldname where you want to display the total price
//         });
//     }
// });
frappe.ui.form.on('sub category', {
	// Add your event handlers for the 'Parent Order' form here
    quantity:function(frm)
    {
        frm.call({
            method:'totalsum',
            doc:frm.doc
        });
    }
});

frappe.ui.form.on('Parent Order', {
	// Add your event handlers for the 'Parent Order' form here
    scan_data:function(frm)
    {
        frm.call({
            method:'acessdata',
            doc:frm.doc
        });
    }
});
