echo Type File Generator && echo Opening Directory
cd "Y:\htdocs\AMG\plus_db\client_dashboards\version_one\plus_attendance\development\src\addons\interfaces\attendance\meeting_event\schedules\categories"
echo Directory Open && echo Generating File
quicktype -l ts main.json -t MeetingEventCategoryModel -o index2.ts --just-types && echo Type File Generated Successfully! 

@REM   --nice-property-names --runtime-typecheck-ignore-unknown-properties --raw-type json --prefer-unions --prefer-types --acronym-style original --converters all-objects --all-properties-optional
@REM  --explicit-unions 
@REM  --runtime-typecheck
@REM --just-types
@REM --acronym-style original|pascal|camel|lowerCase
@REM --converters top-level|all-objects

@REM // NULLABLE STEPS
@REM add  --all-properties-optional to command line
@REM in the generated file, for typeMap::: replace u(undefined, ... to u(null, ...
@REM        change all throw errors into console.error
@REM        replace if (typ === false) return invalidValue(typ, val); with if (typ === false) return;
@REM        remove line return invalidValue(typ, val);
@REM        use // @ts-ignore to silence prop error
@REM        export const typeMap
@REM        add custom types to typeMap. eg. "LocationCountryModel": cmTypeMap['LocationCountryModel'],




