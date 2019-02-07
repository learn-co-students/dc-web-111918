
class CreateSushis < ActiveRecord::Migration[5.0]
  def change
    create_table :sushis do |t|
      t.string :name
      t.string :img_url
      t.integer :price
      t.integer :spice_level
      t.timestamps
    end
  end
end