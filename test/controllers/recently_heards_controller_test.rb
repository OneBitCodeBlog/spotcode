require 'test_helper'

class RecentlyHeardsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get recently_heards_create_url
    assert_response :success
  end

end
