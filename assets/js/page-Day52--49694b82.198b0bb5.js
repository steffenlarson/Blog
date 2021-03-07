(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{485:function(t,e,a){"use strict";a.r(e);var n=a(2),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"day-52"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#day-52"}},[t._v("#")]),t._v(" Day 52")]),t._v(" "),a("p",[a("strong",[t._v("02/23/2021")])]),t._v(" "),a("h2",{attrs:{id:"what-is-the-difference-between-a-primary-key-and-a-foreign-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-a-primary-key-and-a-foreign-key"}},[t._v("#")]),t._v(" What is the difference between a primary key and a foreign key?")]),t._v(" "),a("p",[t._v("Primary keys are the keys listed on a table that identify which specific instance that member of the table is. Foreign keys are placed on the end of the table and reference another table by that tables primary key. Everything will technically have a primary key, but tables that have no relationship will not have a fireign key.")]),t._v(" "),a("h2",{attrs:{id:"what-is-an-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-alias"}},[t._v("#")]),t._v(" What is an Alias?")]),t._v(" "),a("p",[t._v("Aliases are used inside of JOIN statements in SQL statements. They are simply assigning a variable for a name of a table so that the code can be dry and readable. They are simply used for readabilities sake.")]),t._v(" "),a("h2",{attrs:{id:"demonstrate-how-you-would-query-a-join-statement-that-would-get-all-of-a-doctors-patients-from-the-following-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demonstrate-how-you-would-query-a-join-statement-that-would-get-all-of-a-doctors-patients-from-the-following-collection"}},[t._v("#")]),t._v(" Demonstrate how you would query a join statement that would get all of a doctors patients from the following collection:")]),t._v(" "),a("p",[t._v("CREATE TABLE doctors (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),t._v(" "),a("p",[t._v("CREATE TABLE patients (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),t._v(" "),a("p",[t._v("CREATE TABLE doctorpatients (\nid INT NOT NULL AUTO_INCREMENT,\ndoctorId INT NOT NULL,\npatientId INT NOT NULL,")]),t._v(" "),a("p",[t._v("FOREIGN KEY (doctorId)\nREFERENCES doctors(id),\nFOREIGN KEY (patientId)\nREFERENCES patients(id),\n)")]),t._v(" "),a("p",[t._v("internal IEnumerable"),a("PatientDoctorPatientViewModel",[t._v(' GetByDoctorId(int id)\n{\nstring sql = @"\nSELECT\np.*\ndp.id as DoctorPatientId\nFROM doctorpatients dp\nJOIN patients p ON dp.patientId = p.id\nWHERE doctorId = @id\n";\nreturn _db.Query'),a("PatientDoctorPatientViewModel",[t._v("(sql, new { id });\n}")])],1)],1),t._v(" "),a("h2",{attrs:{id:"afternoon-project-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#afternoon-project-link"}},[t._v("#")]),t._v(" Afternoon Project Link:")]),t._v(" "),a("p",[t._v("https://steffenlarson.github.io/contractorapi/")]),t._v(" "),a("h2",{attrs:{id:"reading-dotnet-web-apis-relationships"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-dotnet-web-apis-relationships"}},[t._v("#")]),t._v(" Reading: Dotnet Web APIs: Relationships")])])}),[],!1,null,null,null);e.default=i.exports}}]);