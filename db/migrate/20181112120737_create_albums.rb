class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title
      t.datetime :date
      t.references :category, foreign_key: true
      t.references :artist, foreign_key: true

      t.timestamps
    end
  end
end
