class GroupsController < ApplicationController
    def index
        @group = Group.find(2)
        @user = @group.users.create(name: "Ellie")
        @user.save
    end
end
