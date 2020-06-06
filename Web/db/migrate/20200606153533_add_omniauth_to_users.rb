class AddOmniauthToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :facebook_provider, :string
    add_column :users, :facebook_uid, :string
    add_column :users, :twitter_provider, :string
    add_column :users, :twitter_uid, :string
    add_column :users, :name, :string
    add_column :users, :image, :text
  end
end
