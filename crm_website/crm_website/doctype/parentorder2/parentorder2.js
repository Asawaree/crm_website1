// Copyright (c) 2023, asawari and contributors
// For license information, please see license.txt

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

frappe.ui.form.on('parentorder2', {
	// Add your event handlers for the 'Parent Order' form here
    scan_data:function(frm)
    {
        frm.call({
            method:'acessdata',
            doc:frm.doc
        });
    }
});

frappe.ui.form.on('sub category', {
	// Add your event handlers for the 'Parent Order' form here
    quantity:function(frm)
    {
        frm.call({
            method:'get_total',
            doc:frm.doc
        });
    }
});
