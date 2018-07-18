require './config/environment'

if ActiveRecord::Migrator.needs_migration?
  raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
end

use Rack::MethodOverride # hack so i can make patch/put/delete requests; not all browsers support them
use DolphinsController
run ApplicationController
