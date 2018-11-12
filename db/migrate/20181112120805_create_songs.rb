class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title
      t.integer :played_count, default: 0
      t.references :album, foreign_key: true

      t.timestamps
    end
  end
end
