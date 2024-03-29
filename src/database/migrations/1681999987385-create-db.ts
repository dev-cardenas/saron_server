import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDb1681999987385 implements MigrationInterface {
    name = 'CreateDb1681999987385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sub_categories" ("id_sub_category" character varying NOT NULL, "name" text, "slug" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5be9555660d6277032d221b1a93" PRIMARY KEY ("id_sub_category"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id_category" character varying NOT NULL, "name" text, "slug" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9cfdf8d215b7072d300b9bbcafe" PRIMARY KEY ("id_category"))`);
        await queryRunner.query(`CREATE TABLE "product_cost_history" ("id_product_cost_history" character varying NOT NULL, "date" TIMESTAMP, "name" text, "price_cost" integer, "price_sale" integer, "price_promotion" integer, "slug" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "product_services_id_product_services" character varying, "base_product_services_id_product_services" character varying, CONSTRAINT "PK_9eb66e8cacb2998cae16af6cec0" PRIMARY KEY ("id_product_cost_history"))`);
        await queryRunner.query(`CREATE TABLE "base_product_services" ("id_base_product_services" character varying NOT NULL, "color" text, "name" text, "measure" text, "size" text, "price_cost" integer, "price_sale" integer, "price_promotion" integer, "weight" integer, "type_weight" text, "liter" integer, "is_delete" boolean NOT NULL DEFAULT false, "price_wholesaler" integer, "product_code" text, "product_sku" text, "images" text, "erase_code" text, "description" text, "slug" text, "tags" text, "assessment" text, "features" text, "lote" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "brand_id_brand" character varying, CONSTRAINT "PK_7cb0f47a0bd319b027b62709c06" PRIMARY KEY ("id_base_product_services"))`);
        await queryRunner.query(`CREATE TABLE "brand" ("id_brand" character varying NOT NULL, "description" text, "image" text, "name" text, "slug" text, "status" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "brand_product" character varying, "brand_product_base" character varying, CONSTRAINT "PK_e911a535cc4ed2aea9d1fc2e55a" PRIMARY KEY ("id_brand"))`);
        await queryRunner.query(`CREATE TABLE "deposit" ("id_deposit" character varying NOT NULL, "name" text, "location" text, "slug" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_accfd5ff9e9b00944b046d50dc6" PRIMARY KEY ("id_deposit"))`);
        await queryRunner.query(`CREATE TABLE "stock" ("id_stock" character varying NOT NULL, "name" text, "description" text, "min_stock" integer, "max_stock" integer, "quantity" integer, "status" boolean, "slug" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "product_service_id_product_services" character varying, "id_deposit_id_deposit" character varying, CONSTRAINT "REL_a66b9f3c81ee8bfe3128d98483" UNIQUE ("id_deposit_id_deposit"), CONSTRAINT "PK_303f56a37374ad6eaec00b3ecee" PRIMARY KEY ("id_stock"))`);
        await queryRunner.query(`CREATE TABLE "taxes" ("id_tax" character varying NOT NULL, "percentage" text, "type" text, "slug" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_99697c2f0fdd02383b0fcc61e2d" PRIMARY KEY ("id_tax"))`);
        await queryRunner.query(`CREATE TABLE "product_service" ("id_product_services" character varying NOT NULL, "color" text, "name" text, "hours_and_minutes" text, "measure" text, "size" text, "price_cost" integer, "price_sale" integer, "price_promotion" integer, "weight" integer, "type_weight" text, "liter" integer, "price_wholesaler" integer, "product_code" text, "product_sku" text, "images" text, "erase_code" text, "description" text, "slug" text, "tags" text, "assessment" text, "features" text, "lote" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "brand_id_brand" character varying, "base_product_services_id_base_product_services" character varying, "tax_id_tax" character varying, CONSTRAINT "PK_00d30f8274ebb5771a933f85b52" PRIMARY KEY ("id_product_services"))`);
        await queryRunner.query(`CREATE TABLE "type_business" ("id_type_business" character varying NOT NULL, "type_business" character varying, "slug" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "company_id_company" character varying, CONSTRAINT "UQ_144c65e82c6b6d80820df49ad6b" UNIQUE ("type_business"), CONSTRAINT "PK_cf678c593b1dad9fabe6da68fb5" PRIMARY KEY ("id_type_business"))`);
        await queryRunner.query(`CREATE TABLE "user_permissions" ("id_user_permissions" character varying NOT NULL, "name" text, "description" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c30d4628c2c03aaa8145b13c423" PRIMARY KEY ("id_user_permissions"))`);
        await queryRunner.query(`CREATE TABLE "user_roles" ("id_user_roles" character varying NOT NULL, "user_role" character varying, "description" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_946523ee46d1bc65a7612223a66" UNIQUE ("user_role"), CONSTRAINT "PK_37f70dcb93c609d27380a664b78" PRIMARY KEY ("id_user_roles"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id_user" character varying NOT NULL, "address" text, "name" text, "hours_available" text, "last_name" text, "email" text, "phone" text, "image" text, "whatsapp" text, "is_delete" boolean NOT NULL DEFAULT false, "password_hash" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "company_id_company" character varying, CONSTRAINT "PK_9664961c0264d34a3cf82b11700" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`CREATE TABLE "company" ("id_company" character varying NOT NULL, "address" text, "business_name" text, "company_name" text, "slug" text, "city" text, "lat" text, "lng" text, "ruc" text, "ci" text, "email" text, "hours_available" text, "link_instagram" text, "link_twitter" text, "link_facebook" text, "payment_date" TIMESTAMP, "notice_of_payment" TIMESTAMP, "phone" text, "whatsapp" text, "type_user" text, "account_recovery_email" text, "payment_status" boolean NOT NULL DEFAULT false, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "account_plan_id_account_plans" character varying, CONSTRAINT "PK_3cfb3efea34454bc843324000db" PRIMARY KEY ("id_company"))`);
        await queryRunner.query(`CREATE TABLE "account_plans" ("id_account_plans" character varying NOT NULL, "code" text, "name" text, "slug" text, "description" text, "price" integer, "available_days" integer, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b18f1a000d55fa97f520fdf2832" PRIMARY KEY ("id_account_plans"))`);
        await queryRunner.query(`CREATE TABLE "user_client" ("id_user_client" character varying NOT NULL, "address" text, "name" text, "last_name" text, "email" text, "phone" text, "image" text, "whatsapp" text, "is_delete" boolean NOT NULL DEFAULT false, "password_hash" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bca989a4e93cd7ac33303d13ca0" PRIMARY KEY ("id_user_client"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id_internal_client" character varying NOT NULL, "name" text, "gender" text, "last_name" text, "business_name" text, "email" text, "slug" text, "ruc" text, "ci" text, "phone" text, "whatsapp" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_935fbb6bc2bdf4f3ac43960775a" PRIMARY KEY ("id_internal_client"))`);
        await queryRunner.query(`CREATE TABLE "appointments" ("id_appointments" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "canceled_at" TIMESTAMP NOT NULL DEFAULT now(), "process" text NOT NULL DEFAULT 'REQUEST', "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_226d20e7ea32fc38231b61c202d" PRIMARY KEY ("id_appointments"))`);
        await queryRunner.query(`CREATE TABLE "invoice" ("id_invoice" character varying NOT NULL, "details" text, "stamped" text, "invoice_number" text, "slug" text, "status" text, "beginning_of_validity" TIMESTAMP, "validity_date" TIMESTAMP, "date_of_issue" TIMESTAMP, "sub_total" integer, "total" integer, "sale_condition" text, "tax_type" integer, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2bd284e3708be20e170e2464607" PRIMARY KEY ("id_invoice"))`);
        await queryRunner.query(`CREATE TABLE "provider" ("id_provider" character varying NOT NULL, "name" text, "business_name" text, "address" text, "email" text, "slug" text, "ruc" text, "ci" text, "phone" text, "whatsapp" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1479fc12a4b33f8605441d7b557" PRIMARY KEY ("id_provider"))`);
        await queryRunner.query(`CREATE TABLE "purchase" ("id_purchase" character varying NOT NULL, "name" text, "description" text, "ruc" text, "status" text, "slug" text, "value" text, "type" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6aa8fa0d372981adc4bac16c7fe" PRIMARY KEY ("id_purchase"))`);
        await queryRunner.query(`CREATE TABLE "sale" ("id_sale" character varying NOT NULL, "name" text, "description" text, "slug" text, "ruc" text, "status" text, "value" text, "type" text, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_35a210614b734b6c84d4c8a3285" PRIMARY KEY ("id_sale"))`);
        await queryRunner.query(`CREATE TABLE "id_sub_category_in_category" ("category_id_category" character varying NOT NULL, "sub_categories_id_sub_category" character varying NOT NULL, CONSTRAINT "PK_241e71b7838f280985521a88b78" PRIMARY KEY ("category_id_category", "sub_categories_id_sub_category"))`);
        await queryRunner.query(`CREATE INDEX "IDX_73db6a6b94067696dfb964b8b8" ON "id_sub_category_in_category" ("category_id_category") `);
        await queryRunner.query(`CREATE INDEX "IDX_64e4d3615e94a1bedd943d299e" ON "id_sub_category_in_category" ("sub_categories_id_sub_category") `);
        await queryRunner.query(`CREATE TABLE "category_base_product_services" ("id_base_product_services" character varying NOT NULL, "id_category" character varying NOT NULL, CONSTRAINT "PK_d1bec0d26cb825a4b811e5f71eb" PRIMARY KEY ("id_base_product_services", "id_category"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6ebc890fa5ab6dd950c4f652c8" ON "category_base_product_services" ("id_base_product_services") `);
        await queryRunner.query(`CREATE INDEX "IDX_024c5f89bd26687a36f1f6dad2" ON "category_base_product_services" ("id_category") `);
        await queryRunner.query(`CREATE TABLE "sub_category_base_product_services" ("id_base_product_services" character varying NOT NULL, "id_sub_category" character varying NOT NULL, CONSTRAINT "PK_9e3a8e2bc06195cb5bf23c130be" PRIMARY KEY ("id_base_product_services", "id_sub_category"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8987e3f32852348e490498be5d" ON "sub_category_base_product_services" ("id_base_product_services") `);
        await queryRunner.query(`CREATE INDEX "IDX_f3016ae57f865e9da98f66a910" ON "sub_category_base_product_services" ("id_sub_category") `);
        await queryRunner.query(`CREATE TABLE "id_category_in_product_service" ("id_product_service" character varying NOT NULL, "id_category" character varying NOT NULL, CONSTRAINT "PK_5a7d0a62bd38a062effea203451" PRIMARY KEY ("id_product_service", "id_category"))`);
        await queryRunner.query(`CREATE INDEX "IDX_84f475cff2043421e4cb13e2e4" ON "id_category_in_product_service" ("id_product_service") `);
        await queryRunner.query(`CREATE INDEX "IDX_1ab63f2e3c5a87ae44665ff424" ON "id_category_in_product_service" ("id_category") `);
        await queryRunner.query(`CREATE TABLE "id_sub_category_in_product" ("id_product" character varying NOT NULL, "id_sub_category" character varying NOT NULL, CONSTRAINT "PK_0f7a2e2321887083aa320f768d0" PRIMARY KEY ("id_product", "id_sub_category"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a76466d029fc7d3f21ab032bcc" ON "id_sub_category_in_product" ("id_product") `);
        await queryRunner.query(`CREATE INDEX "IDX_74004fada67da781bd98032357" ON "id_sub_category_in_product" ("id_sub_category") `);
        await queryRunner.query(`CREATE TABLE "user_roles_permission_user_permissions" ("user_roles_id_user_roles" character varying NOT NULL, "user_permissions_id_user_permissions" character varying NOT NULL, CONSTRAINT "PK_63a2ae313375f81e3f4bd17a29a" PRIMARY KEY ("user_roles_id_user_roles", "user_permissions_id_user_permissions"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5f01592fc9f4bb4c42e61c1e5f" ON "user_roles_permission_user_permissions" ("user_roles_id_user_roles") `);
        await queryRunner.query(`CREATE INDEX "IDX_c213f1a0ace370bad6322e4182" ON "user_roles_permission_user_permissions" ("user_permissions_id_user_permissions") `);
        await queryRunner.query(`CREATE TABLE "id_company_in_product_services" ("company_id_company" character varying NOT NULL, "product_service_id_product_services" character varying NOT NULL, CONSTRAINT "PK_7f81248d6addf277678a16f3d1b" PRIMARY KEY ("company_id_company", "product_service_id_product_services"))`);
        await queryRunner.query(`CREATE INDEX "IDX_77a4b007247476f0c6d1b7999d" ON "id_company_in_product_services" ("company_id_company") `);
        await queryRunner.query(`CREATE INDEX "IDX_005a2fdf1ebd7ab301418a85f0" ON "id_company_in_product_services" ("product_service_id_product_services") `);
        await queryRunner.query(`CREATE TABLE "appointments_users_user" ("appointments_id_appointments" character varying NOT NULL, "user_id_user" character varying NOT NULL, CONSTRAINT "PK_6fdf26f2a66afc1df7455b0b59f" PRIMARY KEY ("appointments_id_appointments", "user_id_user"))`);
        await queryRunner.query(`CREATE INDEX "IDX_12f4b75466aab84e3ae7107d53" ON "appointments_users_user" ("appointments_id_appointments") `);
        await queryRunner.query(`CREATE INDEX "IDX_a34d2cb10b75b3fd660c004127" ON "appointments_users_user" ("user_id_user") `);
        await queryRunner.query(`CREATE TABLE "appointments_users_client_user_client" ("appointments_id_appointments" character varying NOT NULL, "user_client_id_user_client" character varying NOT NULL, CONSTRAINT "PK_12148b6f39c31b7b02b1e005aa0" PRIMARY KEY ("appointments_id_appointments", "user_client_id_user_client"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d1520da87c7423589be23e4cbd" ON "appointments_users_client_user_client" ("appointments_id_appointments") `);
        await queryRunner.query(`CREATE INDEX "IDX_f1cf15fba37f7fdd42f697555d" ON "appointments_users_client_user_client" ("user_client_id_user_client") `);
        await queryRunner.query(`CREATE TABLE "appointments_internal_customer_client" ("appointments_id_appointments" character varying NOT NULL, "client_id_internal_client" character varying NOT NULL, CONSTRAINT "PK_7d42a1341d47f01b3b32741fc92" PRIMARY KEY ("appointments_id_appointments", "client_id_internal_client"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b1e361f362eadf645efebd4d46" ON "appointments_internal_customer_client" ("appointments_id_appointments") `);
        await queryRunner.query(`CREATE INDEX "IDX_d1c4bff65140f54749521c5073" ON "appointments_internal_customer_client" ("client_id_internal_client") `);
        await queryRunner.query(`ALTER TABLE "product_cost_history" ADD CONSTRAINT "FK_c262eed4a211179b7a1f0169b2f" FOREIGN KEY ("product_services_id_product_services") REFERENCES "product_service"("id_product_services") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_cost_history" ADD CONSTRAINT "FK_7b7a8de8a1a0ba7489d3900acb3" FOREIGN KEY ("base_product_services_id_product_services") REFERENCES "product_service"("id_product_services") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "base_product_services" ADD CONSTRAINT "FK_ab4c8a9873ccdc5ef8c0f2093f7" FOREIGN KEY ("brand_id_brand") REFERENCES "brand"("id_brand") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "brand" ADD CONSTRAINT "FK_bd5e145fa3c5ed9471c77cb682a" FOREIGN KEY ("brand_product") REFERENCES "product_service"("id_product_services") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "brand" ADD CONSTRAINT "FK_bf22f07d0195a25dee2e0b4a706" FOREIGN KEY ("brand_product_base") REFERENCES "base_product_services"("id_base_product_services") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock" ADD CONSTRAINT "FK_d6372ff68d9d9b7f02badb58f89" FOREIGN KEY ("product_service_id_product_services") REFERENCES "product_service"("id_product_services") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock" ADD CONSTRAINT "FK_a66b9f3c81ee8bfe3128d984835" FOREIGN KEY ("id_deposit_id_deposit") REFERENCES "deposit"("id_deposit") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_service" ADD CONSTRAINT "FK_7dc318bc9f21da676fe5bea5407" FOREIGN KEY ("brand_id_brand") REFERENCES "brand"("id_brand") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_service" ADD CONSTRAINT "FK_76abb96d81f0a7377b1214d9b84" FOREIGN KEY ("base_product_services_id_base_product_services") REFERENCES "base_product_services"("id_base_product_services") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_service" ADD CONSTRAINT "FK_dbf2481b4920c70f1d59b84f33f" FOREIGN KEY ("tax_id_tax") REFERENCES "taxes"("id_tax") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "type_business" ADD CONSTRAINT "FK_ade5f7571b57305849c99b4c108" FOREIGN KEY ("company_id_company") REFERENCES "company"("id_company") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_118725a97921f49a57ccd7efef6" FOREIGN KEY ("company_id_company") REFERENCES "company"("id_company") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "company" ADD CONSTRAINT "FK_49ef93039ca59d33988d74a5c61" FOREIGN KEY ("account_plan_id_account_plans") REFERENCES "account_plans"("id_account_plans") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "id_sub_category_in_category" ADD CONSTRAINT "FK_73db6a6b94067696dfb964b8b83" FOREIGN KEY ("category_id_category") REFERENCES "category"("id_category") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "id_sub_category_in_category" ADD CONSTRAINT "FK_64e4d3615e94a1bedd943d299e6" FOREIGN KEY ("sub_categories_id_sub_category") REFERENCES "sub_categories"("id_sub_category") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_base_product_services" ADD CONSTRAINT "FK_6ebc890fa5ab6dd950c4f652c8b" FOREIGN KEY ("id_base_product_services") REFERENCES "base_product_services"("id_base_product_services") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_base_product_services" ADD CONSTRAINT "FK_024c5f89bd26687a36f1f6dad23" FOREIGN KEY ("id_category") REFERENCES "category"("id_category") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "sub_category_base_product_services" ADD CONSTRAINT "FK_8987e3f32852348e490498be5df" FOREIGN KEY ("id_base_product_services") REFERENCES "base_product_services"("id_base_product_services") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "sub_category_base_product_services" ADD CONSTRAINT "FK_f3016ae57f865e9da98f66a9108" FOREIGN KEY ("id_sub_category") REFERENCES "sub_categories"("id_sub_category") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "id_category_in_product_service" ADD CONSTRAINT "FK_84f475cff2043421e4cb13e2e47" FOREIGN KEY ("id_product_service") REFERENCES "product_service"("id_product_services") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "id_category_in_product_service" ADD CONSTRAINT "FK_1ab63f2e3c5a87ae44665ff4246" FOREIGN KEY ("id_category") REFERENCES "category"("id_category") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "id_sub_category_in_product" ADD CONSTRAINT "FK_a76466d029fc7d3f21ab032bcc8" FOREIGN KEY ("id_product") REFERENCES "product_service"("id_product_services") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "id_sub_category_in_product" ADD CONSTRAINT "FK_74004fada67da781bd980323574" FOREIGN KEY ("id_sub_category") REFERENCES "sub_categories"("id_sub_category") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles_permission_user_permissions" ADD CONSTRAINT "FK_5f01592fc9f4bb4c42e61c1e5fe" FOREIGN KEY ("user_roles_id_user_roles") REFERENCES "user_roles"("id_user_roles") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles_permission_user_permissions" ADD CONSTRAINT "FK_c213f1a0ace370bad6322e4182e" FOREIGN KEY ("user_permissions_id_user_permissions") REFERENCES "user_permissions"("id_user_permissions") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "id_company_in_product_services" ADD CONSTRAINT "FK_77a4b007247476f0c6d1b7999df" FOREIGN KEY ("company_id_company") REFERENCES "company"("id_company") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "id_company_in_product_services" ADD CONSTRAINT "FK_005a2fdf1ebd7ab301418a85f0a" FOREIGN KEY ("product_service_id_product_services") REFERENCES "product_service"("id_product_services") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "appointments_users_user" ADD CONSTRAINT "FK_12f4b75466aab84e3ae7107d53f" FOREIGN KEY ("appointments_id_appointments") REFERENCES "appointments"("id_appointments") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "appointments_users_user" ADD CONSTRAINT "FK_a34d2cb10b75b3fd660c0041273" FOREIGN KEY ("user_id_user") REFERENCES "user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "appointments_users_client_user_client" ADD CONSTRAINT "FK_d1520da87c7423589be23e4cbdf" FOREIGN KEY ("appointments_id_appointments") REFERENCES "appointments"("id_appointments") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "appointments_users_client_user_client" ADD CONSTRAINT "FK_f1cf15fba37f7fdd42f697555db" FOREIGN KEY ("user_client_id_user_client") REFERENCES "user_client"("id_user_client") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "appointments_internal_customer_client" ADD CONSTRAINT "FK_b1e361f362eadf645efebd4d462" FOREIGN KEY ("appointments_id_appointments") REFERENCES "appointments"("id_appointments") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "appointments_internal_customer_client" ADD CONSTRAINT "FK_d1c4bff65140f54749521c50732" FOREIGN KEY ("client_id_internal_client") REFERENCES "client"("id_internal_client") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments_internal_customer_client" DROP CONSTRAINT "FK_d1c4bff65140f54749521c50732"`);
        await queryRunner.query(`ALTER TABLE "appointments_internal_customer_client" DROP CONSTRAINT "FK_b1e361f362eadf645efebd4d462"`);
        await queryRunner.query(`ALTER TABLE "appointments_users_client_user_client" DROP CONSTRAINT "FK_f1cf15fba37f7fdd42f697555db"`);
        await queryRunner.query(`ALTER TABLE "appointments_users_client_user_client" DROP CONSTRAINT "FK_d1520da87c7423589be23e4cbdf"`);
        await queryRunner.query(`ALTER TABLE "appointments_users_user" DROP CONSTRAINT "FK_a34d2cb10b75b3fd660c0041273"`);
        await queryRunner.query(`ALTER TABLE "appointments_users_user" DROP CONSTRAINT "FK_12f4b75466aab84e3ae7107d53f"`);
        await queryRunner.query(`ALTER TABLE "id_company_in_product_services" DROP CONSTRAINT "FK_005a2fdf1ebd7ab301418a85f0a"`);
        await queryRunner.query(`ALTER TABLE "id_company_in_product_services" DROP CONSTRAINT "FK_77a4b007247476f0c6d1b7999df"`);
        await queryRunner.query(`ALTER TABLE "user_roles_permission_user_permissions" DROP CONSTRAINT "FK_c213f1a0ace370bad6322e4182e"`);
        await queryRunner.query(`ALTER TABLE "user_roles_permission_user_permissions" DROP CONSTRAINT "FK_5f01592fc9f4bb4c42e61c1e5fe"`);
        await queryRunner.query(`ALTER TABLE "id_sub_category_in_product" DROP CONSTRAINT "FK_74004fada67da781bd980323574"`);
        await queryRunner.query(`ALTER TABLE "id_sub_category_in_product" DROP CONSTRAINT "FK_a76466d029fc7d3f21ab032bcc8"`);
        await queryRunner.query(`ALTER TABLE "id_category_in_product_service" DROP CONSTRAINT "FK_1ab63f2e3c5a87ae44665ff4246"`);
        await queryRunner.query(`ALTER TABLE "id_category_in_product_service" DROP CONSTRAINT "FK_84f475cff2043421e4cb13e2e47"`);
        await queryRunner.query(`ALTER TABLE "sub_category_base_product_services" DROP CONSTRAINT "FK_f3016ae57f865e9da98f66a9108"`);
        await queryRunner.query(`ALTER TABLE "sub_category_base_product_services" DROP CONSTRAINT "FK_8987e3f32852348e490498be5df"`);
        await queryRunner.query(`ALTER TABLE "category_base_product_services" DROP CONSTRAINT "FK_024c5f89bd26687a36f1f6dad23"`);
        await queryRunner.query(`ALTER TABLE "category_base_product_services" DROP CONSTRAINT "FK_6ebc890fa5ab6dd950c4f652c8b"`);
        await queryRunner.query(`ALTER TABLE "id_sub_category_in_category" DROP CONSTRAINT "FK_64e4d3615e94a1bedd943d299e6"`);
        await queryRunner.query(`ALTER TABLE "id_sub_category_in_category" DROP CONSTRAINT "FK_73db6a6b94067696dfb964b8b83"`);
        await queryRunner.query(`ALTER TABLE "company" DROP CONSTRAINT "FK_49ef93039ca59d33988d74a5c61"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_118725a97921f49a57ccd7efef6"`);
        await queryRunner.query(`ALTER TABLE "type_business" DROP CONSTRAINT "FK_ade5f7571b57305849c99b4c108"`);
        await queryRunner.query(`ALTER TABLE "product_service" DROP CONSTRAINT "FK_dbf2481b4920c70f1d59b84f33f"`);
        await queryRunner.query(`ALTER TABLE "product_service" DROP CONSTRAINT "FK_76abb96d81f0a7377b1214d9b84"`);
        await queryRunner.query(`ALTER TABLE "product_service" DROP CONSTRAINT "FK_7dc318bc9f21da676fe5bea5407"`);
        await queryRunner.query(`ALTER TABLE "stock" DROP CONSTRAINT "FK_a66b9f3c81ee8bfe3128d984835"`);
        await queryRunner.query(`ALTER TABLE "stock" DROP CONSTRAINT "FK_d6372ff68d9d9b7f02badb58f89"`);
        await queryRunner.query(`ALTER TABLE "brand" DROP CONSTRAINT "FK_bf22f07d0195a25dee2e0b4a706"`);
        await queryRunner.query(`ALTER TABLE "brand" DROP CONSTRAINT "FK_bd5e145fa3c5ed9471c77cb682a"`);
        await queryRunner.query(`ALTER TABLE "base_product_services" DROP CONSTRAINT "FK_ab4c8a9873ccdc5ef8c0f2093f7"`);
        await queryRunner.query(`ALTER TABLE "product_cost_history" DROP CONSTRAINT "FK_7b7a8de8a1a0ba7489d3900acb3"`);
        await queryRunner.query(`ALTER TABLE "product_cost_history" DROP CONSTRAINT "FK_c262eed4a211179b7a1f0169b2f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d1c4bff65140f54749521c5073"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b1e361f362eadf645efebd4d46"`);
        await queryRunner.query(`DROP TABLE "appointments_internal_customer_client"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f1cf15fba37f7fdd42f697555d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d1520da87c7423589be23e4cbd"`);
        await queryRunner.query(`DROP TABLE "appointments_users_client_user_client"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a34d2cb10b75b3fd660c004127"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_12f4b75466aab84e3ae7107d53"`);
        await queryRunner.query(`DROP TABLE "appointments_users_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_005a2fdf1ebd7ab301418a85f0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_77a4b007247476f0c6d1b7999d"`);
        await queryRunner.query(`DROP TABLE "id_company_in_product_services"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c213f1a0ace370bad6322e4182"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5f01592fc9f4bb4c42e61c1e5f"`);
        await queryRunner.query(`DROP TABLE "user_roles_permission_user_permissions"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_74004fada67da781bd98032357"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a76466d029fc7d3f21ab032bcc"`);
        await queryRunner.query(`DROP TABLE "id_sub_category_in_product"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1ab63f2e3c5a87ae44665ff424"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_84f475cff2043421e4cb13e2e4"`);
        await queryRunner.query(`DROP TABLE "id_category_in_product_service"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f3016ae57f865e9da98f66a910"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8987e3f32852348e490498be5d"`);
        await queryRunner.query(`DROP TABLE "sub_category_base_product_services"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_024c5f89bd26687a36f1f6dad2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6ebc890fa5ab6dd950c4f652c8"`);
        await queryRunner.query(`DROP TABLE "category_base_product_services"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_64e4d3615e94a1bedd943d299e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_73db6a6b94067696dfb964b8b8"`);
        await queryRunner.query(`DROP TABLE "id_sub_category_in_category"`);
        await queryRunner.query(`DROP TABLE "sale"`);
        await queryRunner.query(`DROP TABLE "purchase"`);
        await queryRunner.query(`DROP TABLE "provider"`);
        await queryRunner.query(`DROP TABLE "invoice"`);
        await queryRunner.query(`DROP TABLE "appointments"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "user_client"`);
        await queryRunner.query(`DROP TABLE "account_plans"`);
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
        await queryRunner.query(`DROP TABLE "user_permissions"`);
        await queryRunner.query(`DROP TABLE "type_business"`);
        await queryRunner.query(`DROP TABLE "product_service"`);
        await queryRunner.query(`DROP TABLE "taxes"`);
        await queryRunner.query(`DROP TABLE "stock"`);
        await queryRunner.query(`DROP TABLE "deposit"`);
        await queryRunner.query(`DROP TABLE "brand"`);
        await queryRunner.query(`DROP TABLE "base_product_services"`);
        await queryRunner.query(`DROP TABLE "product_cost_history"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "sub_categories"`);
    }

}
