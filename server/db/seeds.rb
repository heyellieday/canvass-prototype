# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

@group = Group.create()
@group.users.create([
    {name: "Ellie", email:"test@gmail.com",
     profile_pic: "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-ash4/t1.0-9/10153765_1403043279972803_7769249082470726667_n.jpg", bio: "Awesomely Aweosme."},
    {name: "Vijay", email:"test@gmail.com", 
     profile_pic: "https://lh4.googleusercontent.com/-k8mKIvx7y_o/Thm9E_mN5pI/AAAAAAAACYM/WLOXHeBQwKI/w268-h267-no/100_1606.JPG.jpg", bio: "Awesome too."},
    {name: "Kate",email:"test@gmail.com", 
     profile_pic: "https://scontent-b.xx.fbcdn.net/hphotos-prn2/t1.0-9/p720x720/1175613_10201864662124380_658618106_n.jpg", bio: "Awesome as well."}
    ])
