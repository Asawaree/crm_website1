# Copyright (c) 2023, asawari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class parentorder2(Document):
	@frappe.whitelist()
	def totalsum(self):
		for i in self.get("order_details"):
			i.total_price= i.quantity* i.price
	@frappe.whitelist()
	def acessdata(self):
		doc=frappe.db.get_list("empolyee3",filters={"barcode":self.scan_data},fields=["first_name","middle_name","last_name","gender","email_id","mobile_no"] )
		# frappe.msgprint(str(doc))
		if(doc):
			for d in doc:
				self.first_name=d.first_name
				self.middle_name=d.middle_name
				self.last_name=d.last_name
				self.gender=d.gender
				self.email_id=d.email_id
				self.mobile_no=d.mobile_no
		else:
			frappe.throw("Barcode is Not Registered")
	@frappe.whitelist()
	def get_total(self):
		total=0
		for row in self.order_details:
			total=total+row.total_price
		self.total_price1=total
