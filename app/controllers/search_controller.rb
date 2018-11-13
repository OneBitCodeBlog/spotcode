class SearchController < ApplicationController
  def index
    @songs = Song.where("title LIKE ?", "%#{params[:search]}%")
    @albums = Album.where("title LIKE ?", "%#{params[:search]}%")
    @artists = Artist.where("name LIKE ?", "%#{params[:search]}%")
  end


  def new
  end
end