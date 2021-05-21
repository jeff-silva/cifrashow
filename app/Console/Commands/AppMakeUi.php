<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AppMakeUi extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:make-ui';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gerar interfaces';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $tables = config('database-schema.tables', []);
        foreach($tables as $table_name=>$table) {
            if (config("database-settings.models.{$table_name}")) {

                $model = new \stdClass;
                $model->name = (string) \Str::of($table_name)->studly()->kebab()->singular();
                $model->file = base_path(implode(DIRECTORY_SEPARATOR, ['resources', 'nuxt', 'components', 'generated', "ui-{$model->name}.vue"]));
                $model->route = (string) \Str::of($table_name)->studly()->kebab()->singular();

                $content = implode("\n", [
                    '<template><div>',
                    "\t<el-select v-model=\"props.value\" :multiple=\"props.multiple\" class=\"form-control p-0\">",
                    "\t\t<el-option value=\"\">{{ props.placeholder }}</el-option>",
                    "\t\t<el-option :value=\"i.id\" :label=\"i.name||i.id\" v-for=\"i in items\" :key=\"i.id\">{{ i.name||i.id }}</el-option>",
                    "\t</el-select>",
                    '</div></template>',
                    '',
                    '<script>',
                    'export default {',
                    "\tname: \"ui-{$model->name}\",",
                    "\t",
                    "\tprops: {",
                    "\t\tvalue: [Number, String, Array],",
                    "\t\tplaceholder: {default:'Selecionar'},",
                    "\t\tmultiple: {default:false},",
                    "\t},",
                    "\t",
                    "\tmethods: {",
                    "\t\tremoveSearch(q='') {",
                    "\t\t\tthis.\$axios.get('/api/{$model->route}/search', {params:{q}}).then(resp => {",
                    "\t\t\t\tthis.items = resp.data.data;",
                    "\t\t\t});",
                    "\t\t},",
                    "\t},",
                    "\t",
                    "\tdata() {",
                    "\t\treturn {",
                    "\t\t\tprops: JSON.parse(JSON.stringify(this.\$props)),",
                    "\t\t\titems: [],",
                    "\t\t};",
                    "\t},",
                    "\t",
                    "\tmounted() {",
                    "\t\tthis.removeSearch();",
                    "\t},",
                    '}',
                    '</script>',
                ]);

                file_put_contents($model->file, $content);
            }
        }
    }
}
