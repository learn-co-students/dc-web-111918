class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :fluffiness
      t.boolean :mean 
      t.string :picture
      t.timestamps
    end
  end
end
