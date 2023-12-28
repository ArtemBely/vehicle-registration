--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: AspNetRoles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AspNetRoles" ("Id", "Name", "NormalizedName", "ConcurrencyStamp") FROM stdin;
f5065bf2-5d44-4091-920b-2c1338b3c463	USER	USER	\N
0b367b80-0cb1-4ab6-b579-373aaaeb0fe0	ADMIN	ADMIN	\N
3701bc14-4382-4c2e-a6b2-7e5c852810ff	GUEST	GUEST	\N
\.


--
-- Data for Name: AspNetRoleClaims; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AspNetRoleClaims" ("Id", "RoleId", "ClaimType", "ClaimValue") FROM stdin;
\.


--
-- Data for Name: AspNetUsers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AspNetUsers" ("Id", "FirstName", "Surname", "UserName", "NormalizedUserName", "Email", "NormalizedEmail", "EmailConfirmed", "PasswordHash", "SecurityStamp", "ConcurrencyStamp", "PhoneNumber", "PhoneNumberConfirmed", "TwoFactorEnabled", "LockoutEnd", "LockoutEnabled", "AccessFailedCount") FROM stdin;
21c32d28-250f-4324-9180-2dac810e00af	Sally	Kooper	terw11@gmail.com	TERW11@GMAIL.COM	terw11@gmail.com	TERW11@GMAIL.COM	f	AQAAAAIAAYagAAAAEPL/6QkmikYsrO3ttVs882urg3CdB3e186ljb2DDIczHGO90JMMX4HNhzDaQlOrleA==	QH5QGBWI6WVOG5JNBS44OMSHSOYSDYCK	f82160e1-36e5-4820-afae-cfb76cdd6c61	121212775650705	f	f	\N	t	0
cbe01c2c-f16f-4475-922d-1fd94d5e1b55	Artem	Belyshev	belysevartem9@gmail.com	BELYSEVARTEM9@GMAIL.COM	belysevartem9@gmail.com	BELYSEVARTEM9@GMAIL.COM	f	AQAAAAIAAYagAAAAEN255MTobl0NMeqpyzzXzL8A4mv4RfLMsP8NlSyLDrxwuUgESarb3SSj9s9NHlKTGA==	GM6ZBHXV2FB2I2XILWH6LL2BCXHGI5ZJ	8aec3efd-3a1a-49b8-8af4-f34e268e4d3b	5555555555551	f	f	\N	t	0
33768835-ab7f-462e-a47c-7bfac615872c	Garry	Lee	bowdswir@gmail.com	BOWDSWIR@GMAIL.COM	bowdswir@gmail.com	BOWDSWIR@GMAIL.COM	f	AQAAAAIAAYagAAAAEOMhCI5Xo6P6XzOXYKwF/lThK2JMj9jsCRELi+bev+WgEXzlxUv35Zj2cvEcHmtiEg==	EDNTDH36VWWYRUSMVAFKNTHI77CREVXE	a8d6dea1-6963-4ee2-a4d5-a33a2b60ba5c	420775650701	f	f	\N	t	0
daf92977-aed0-4353-99f2-3115d4680f7b	Brad	Lee	belysevartesdm9@gmail.com	BELYSEVARTESDM9@GMAIL.COM	belysevartesdm9@gmail.com	BELYSEVARTESDM9@GMAIL.COM	f	AQAAAAIAAYagAAAAELbL4uoOGit1SxzDvR/9Gw/3WFdOhBNAeCCoPSrvndekX7UFXac8I6sRxGEoJWbGNA==	5AHV2SQCU6TD5LVR4RBHLCHRDBPXSGMW	2df2f324-aeae-4f05-b333-b05d7d8234b3	98278748422	f	f	\N	t	0
ba90a314-503d-4fca-8add-cf9a65e1a089	Brayan	Sally	brayan@gmail.com	BRAYAN@GMAIL.COM	brayan@gmail.com	BRAYAN@GMAIL.COM	f	AQAAAAIAAYagAAAAEJDD8JbNG4ep4rg6A25Ie1Fp1sIscdRsOO+3RyzIYPk5q3N+CZY+ro6OLtMSPqop0A==	EOH4ZKODXDWBD3WHUC2EII4GZ44XWH5A	13d4f57f-df09-4a4d-ae3f-ef0456f5316a	84397438748	f	f	\N	t	0
a1b41207-8508-421b-9569-4ffc236894f5	Django	Billi	sader@mail.org	SADER@MAIL.ORG	sader@mail.org	SADER@MAIL.ORG	f	AQAAAAIAAYagAAAAENW+Px9myH103gwESiATOUKL22tSg7TFZA18Elj4bAI2zD9BkNAblLL0K3RUCrpkTw==	TV5MCRCS6PMKAAYA56NVJUDYAWRGFBCK	0d38b824-8b7e-47ed-844f-3f18f7eb58ce	89263763711	f	f	\N	t	0
4ff26f12-0c73-46fe-b20e-772686974cac	Billd	Billi	billi@mail.org	BILLI@MAIL.ORG	billi@mail.org	BILLI@MAIL.ORG	f	AQAAAAIAAYagAAAAEOYcT+OgX3FJHUOSoDcnDOGJ/Gg4pSGQJZLTcvAg5cmHRN3ogsgDlPxajZTE8fnDHQ==	MLHP3SLBUFKI7X6JOYBNOFMAK7AJ3KY6	f7bc23ab-33ce-4fbd-8579-f76edb1a31b2	\N	f	f	\N	t	0
77ec2256-8295-4a64-9553-4a49c7fd21ec	Garry	Stown	garry@mail.org	GARRY@MAIL.ORG	garry@mail.org	GARRY@MAIL.ORG	f	AQAAAAIAAYagAAAAEB30LXyeztmz/H+vmoT49mVr0mGZDNvmPA9bodgd+a0Z9mn8tN7oOyDEXvPELUZtDQ==	ZMDLZN5IJRWXR5A74BUQRAXQHEZC2SVZ	59e37f81-cf10-4661-b0fa-bf7dd189e2d3	64364532	f	f	\N	t	0
e99422ca-1e93-403f-81aa-d05339fd5271	Mark	Davidsson	mcmvmcvmcmv@gmail.com	MCMVMCVMCMV@GMAIL.COM	mcmvmcvmcmv@gmail.com	MCMVMCVMCMV@GMAIL.COM	f	AQAAAAIAAYagAAAAEB8WBt+gsXHyON8j23x3YdXXmTqnYI99j0OezH7EnoG6uIY38NnrnjaJV28/IFYpmQ==	M3OGYTP4HPCEZRRWP5UJU2XPQUCF4TJ2	8c04ddd9-ca0a-4fe9-b19f-78982f0937d5	4207275674705	f	f	\N	t	0
a7c69893-e6a2-4fec-a10d-1123f30d0bfd	Adam	Simmons	alan@mail.org	ALAN@MAIL.ORG	alan@mail.org	ALAN@MAIL.ORG	f	AQAAAAIAAYagAAAAEEtjyXOeG3GzFcxMBW6QGIOBpxm54GnpcrCgViDrvBAvsfz5t73HqQTvZRO3vuQx0g==	4KOBKOYFPWUFOAC4XV7BO76PGCKGD63X	69617e97-fdb3-4a4d-8cf6-41c97f31741b	+92372847833	f	f	\N	t	0
1773d91a-8e0a-4c49-aa85-6741810af5bf	Bill	Bowg	bill9@gmail.com	BILL9@GMAIL.COM	bill9@gmail.com	BILL9@GMAIL.COM	f	AQAAAAIAAYagAAAAEGcQF+GKpQnLWoGFn5R93ZpaWn2ZUXQxO82HfpvIQF+k2tDMSvRxLUOrsIfw2aC2dw==	PG5AVM4IN5CM4OSWMRET7QUF4IAQGKF4	957eb540-35c5-4e29-8019-f848a4c4bbe4	\N	f	f	\N	t	0
9247ec8b-c110-458e-8bc4-5c61069c728e	Joshua	Yellow	joshua@gmail.com	JOSHUA@GMAIL.COM	joshua@gmail.com	JOSHUA@GMAIL.COM	f	AQAAAAIAAYagAAAAEKpkqYIi9Sz/djFwx7hbedq2hWGRpVxGViQ3iVl2gs1dMuhZ5V7w59YFCYEf2o4bpw==	MVLJWQZNJBFZKI2MMNORDNKBEKMGOXGW	576f0534-2188-4656-a823-54b1e06262c5	32783782378723	f	f	\N	t	0
ee61cf55-bd78-4dde-a004-5c1371ac00ea	Samuelss	Jackson	sam@altervista22.org	SAM@ALTERVISTA22.ORG	sam@altervista22.org	SAM@ALTERVISTA22.ORG	f	AQAAAAIAAYagAAAAEBr0z/BDmHNJzuSGaXLkUhhE/ALXipMDUncxOoV137LeTRY7cXex05jA2/FLhUy89A==	SX7VMJVCJ2OITYLNC6T636UWTFFC5YRO	9e5e1a8d-9f17-491e-9b23-0407f80b3221	9834874387438734	f	f	\N	t	0
bc8d06da-c339-45db-a454-fcdbaa82b9a4	Samuel	Jackson	sam@mail.org	SAM@MAIL.ORG	sam@mail.org	SAM@MAIL.ORG	f	AQAAAAIAAYagAAAAECS8lgWnUOYLlQIGcZ6hy3iNxfT2p0NvRHWrVccNr7vuEHHaDrQhJBqL87V/yJliVg==	LLSYBQZR3LAL567E5ZIWQCP2VZDXV5X4	4b417929-4b75-4302-8474-d592d9863638	194743338502	f	f	\N	t	0
40ae0cef-fd99-4f4e-b164-001a18bad387	Gary	Smith	gallo99@gmail.com	GALLO99@GMAIL.COM	gallo99@gmail.com	GALLO99@GMAIL.COM	f	AQAAAAIAAYagAAAAENYc9iqSV3tUU9znDDEh6VyBUqKKIBXqx6W6AIlkCLkew4efaTcuEt0G+VVER+V0Ew==	J3AYGPF473XAFQERGGS73IN526DFLA52	396febd8-082d-442f-ac22-001d9b2ef69a	+2848726372	f	f	\N	t	0
dbd61501-6e9d-498d-9149-6f4c1a152d85	Sharone	Stones	sharon@gmail.com	SHARON@GMAIL.COM	sharon@gmail.com	SHARON@GMAIL.COM	f	AQAAAAIAAYagAAAAEPALLHxb40ZbLw+e8aUW21KEWc8S6Xo+dHj5EPHzgLTcoqgvoxekNFtgY8Izcd4wPw==	XL6BF4SWA6ZTPA2GU6CMG3BE2JTFPJAY	a9b2858d-8861-4058-ac01-d3f4c7c3450b	+2947289841	f	f	\N	t	0
b77bae41-afc2-4205-b70d-0974796a42fb	Stanley	Kooper	stanley@gmail.com	STANLEY@GMAIL.COM	stanley@gmail.com	STANLEY@GMAIL.COM	f	AQAAAAIAAYagAAAAEIfk9ndSpWxs2CdHNP1WZ/MZ2ollPJ9ANnszRvp8CtCdhLOmpwYR7bOnMaJtYs+NAA==	UU7XAR5PNUN6HTA5P65CVD27PVVEHU2M	58e626ab-bd7f-4c3e-b1b2-9d102b0f7d7b	420775650731	f	f	\N	t	0
5c93dabc-a206-4a16-9323-72aaa1d909f3	Jango	Star	jango@gmail.com	JANGO@GMAIL.COM	jango@gmail.com	JANGO@GMAIL.COM	f	AQAAAAIAAYagAAAAEJicZrELWPTqGXJT4eeaMCGv6y2YcdVNT9nifNXfU1GlzvBRij05x15z8EsFfBsQmQ==	SBQNYVZNZYHST2SD6D7WWQD73KWZXROG	65b26b57-9387-4a5a-b806-88bdb86ac036	322077565022	f	f	\N	t	0
89b555be-eb1a-42f4-b21c-dc944ead5b00	Mayke	Jefersson	mj@gmail.com	MJ@GMAIL.COM	mj@gmail.com	MJ@GMAIL.COM	f	AQAAAAIAAYagAAAAEAXr4IonUu5DPOTy+wM0NfJDAPJkGVSqUZ/PwUWDbpdQEVf8dTT2GbGDZxdoJtYCng==	MC4S2B2IKSXBACJIAYT53ZHKMNCHD5CN	0edcba02-8e7f-41e3-9028-f41838921414	32234564534	f	f	\N	t	0
\.


--
-- Data for Name: AspNetUserClaims; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AspNetUserClaims" ("Id", "UserId", "ClaimType", "ClaimValue") FROM stdin;
\.


--
-- Data for Name: AspNetUserLogins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AspNetUserLogins" ("LoginProvider", "ProviderKey", "ProviderDisplayName", "UserId") FROM stdin;
\.


--
-- Data for Name: AspNetUserRoles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AspNetUserRoles" ("UserId", "RoleId") FROM stdin;
bc8d06da-c339-45db-a454-fcdbaa82b9a4	f5065bf2-5d44-4091-920b-2c1338b3c463
a7c69893-e6a2-4fec-a10d-1123f30d0bfd	f5065bf2-5d44-4091-920b-2c1338b3c463
bc8d06da-c339-45db-a454-fcdbaa82b9a4	0b367b80-0cb1-4ab6-b579-373aaaeb0fe0
cbe01c2c-f16f-4475-922d-1fd94d5e1b55	f5065bf2-5d44-4091-920b-2c1338b3c463
1773d91a-8e0a-4c49-aa85-6741810af5bf	f5065bf2-5d44-4091-920b-2c1338b3c463
4ff26f12-0c73-46fe-b20e-772686974cac	f5065bf2-5d44-4091-920b-2c1338b3c463
a1b41207-8508-421b-9569-4ffc236894f5	f5065bf2-5d44-4091-920b-2c1338b3c463
ba90a314-503d-4fca-8add-cf9a65e1a089	f5065bf2-5d44-4091-920b-2c1338b3c463
77ec2256-8295-4a64-9553-4a49c7fd21ec	f5065bf2-5d44-4091-920b-2c1338b3c463
9247ec8b-c110-458e-8bc4-5c61069c728e	f5065bf2-5d44-4091-920b-2c1338b3c463
33768835-ab7f-462e-a47c-7bfac615872c	f5065bf2-5d44-4091-920b-2c1338b3c463
daf92977-aed0-4353-99f2-3115d4680f7b	f5065bf2-5d44-4091-920b-2c1338b3c463
21c32d28-250f-4324-9180-2dac810e00af	f5065bf2-5d44-4091-920b-2c1338b3c463
e99422ca-1e93-403f-81aa-d05339fd5271	f5065bf2-5d44-4091-920b-2c1338b3c463
dbd61501-6e9d-498d-9149-6f4c1a152d85	f5065bf2-5d44-4091-920b-2c1338b3c463
a7c69893-e6a2-4fec-a10d-1123f30d0bfd	0b367b80-0cb1-4ab6-b579-373aaaeb0fe0
9247ec8b-c110-458e-8bc4-5c61069c728e	0b367b80-0cb1-4ab6-b579-373aaaeb0fe0
40ae0cef-fd99-4f4e-b164-001a18bad387	f5065bf2-5d44-4091-920b-2c1338b3c463
b77bae41-afc2-4205-b70d-0974796a42fb	f5065bf2-5d44-4091-920b-2c1338b3c463
77ec2256-8295-4a64-9553-4a49c7fd21ec	0b367b80-0cb1-4ab6-b579-373aaaeb0fe0
5c93dabc-a206-4a16-9323-72aaa1d909f3	f5065bf2-5d44-4091-920b-2c1338b3c463
5c93dabc-a206-4a16-9323-72aaa1d909f3	0b367b80-0cb1-4ab6-b579-373aaaeb0fe0
89b555be-eb1a-42f4-b21c-dc944ead5b00	f5065bf2-5d44-4091-920b-2c1338b3c463
\.


--
-- Data for Name: AspNetUserTokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AspNetUserTokens" ("UserId", "LoginProvider", "Name", "Value") FROM stdin;
\.


--
-- Data for Name: __EFMigrationsHistory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."__EFMigrationsHistory" ("MigrationId", "ProductVersion") FROM stdin;
20231221133109_AddIdentityTables	7.0.13
\.


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (id, name, surname, phone, dateofbirth, email, password) FROM stdin;
1	Alan	User	997663997	1996-12-12	alan@yahoo.com	$2a$10$Of2QzVpsC3dKASClAVFAqOmmzhr8qBcxclWyl/a3gAvedOFaWf4/6
2	Jason	Bourne	3233232323	2000-12-12	jason@bourne.com	$2a$10$Of2QzVpsC3dKASClAVFAqOmmzhr8qBcxclWyl/a4gAvedOFaWf4/6
\.


--
-- Data for Name: factory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.factory (id, title, factory_location, director_id) FROM stdin;
2	MB Mlada Boleslav	Mlada Boleslav	dbd61501-6e9d-498d-9149-6f4c1a152d85
7	KV Kvasiny	Kvasiny	f906fab6-0a16-41a6-a51f-7f1f8d87c1dd
1	VW Bratislava	Bratislava, Slovakia	a7c69893-e6a2-4fec-a10d-1123f30d0bfd
\.


--
-- Data for Name: vehicle; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vehicle (id, carserie, carbody, motor, transmission, werk, baugruppe, knr7, pin13, factory_id) FROM stdin;
7	KL320234	ENIAQ	107/2.8	KLB92	ENIAQ152	001ELR 101847HG37650	4792643	3378375025392	1
15	M3320234	ENIAQ	110/3.1	JQJ12	ENIAQ652	002JDK 173947HG37279	3728491	3091662820134	1
11	KA320203	RAPID	109/3.2	RPD12	RAPID813	002DRD 109717HU37657	3728491	3091662820134	2
16	M3320234	RAPID	107/2.8	JQJ12	ELRQ3728	001DNF 187029PG23215	4792643	3091662820134	1
14	KA320203	ELROQ	110/3.1	JQJ12	ELRQ3728	001ELR 101847HG37650	4792643	3320232220300	7
13	ZO327384	ENIAQ	109/3.2	JQJ12	ENIAQ652	001ELR 101847HG37650	4385154	3091662820134	1
5	M3320234	KOMIQ	109/3.2	KLB92	KMQ20235	001DNF 187029PG23215	3658395	3091601763534	7
18	M3320234	RAPID	107/2.8	RPD12	RAPID113	001DRP 109019IU37657	4792643	3378375025392	2
1	KL320234	KOMIQ	111/1/8	KLB92	KMQ20235	002JDK 173947HG37279	4792643	3981262820750	7
12	KA110203	RAPID	109/1.8	RPD13	RAPID113	001DRP 109019IU37657	4385154	3091601763534	2
4	M3320234	ENIAQ	111/1/8	KLB92	KMQ20235	002JDK 173947HG37279	3320232	3320232220300	7
17	KA110203	KOMIQ	109/1.8	KLB92	KMQ20235	002JDK 173947HG37279	3320232	3091601763534	2
2	M3320234	ELROQ	111/1/8	KLB92	ELRQ3728	002JDK 173947HG37279	4792643	3320232220300	7
8	ZO327384	KOMIQ	110/3.1	JQJ12	KMQ20235	001ELR 101847HG37650	3658395	3981262820750	7
9	KL320234	ENIAQ	110/3.1	JQJ12	KMQ20235	002JDK 173947HG37279	3320232	3981262820750	2
6	KL320234	ENIAQ	110/3.1	KLB92	ENIAQ652	001ELR 101847HG37650	3728491	3320232220300	1
\.


--
-- Name: AspNetRoleClaims_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."AspNetRoleClaims_Id_seq"', 1, false);


--
-- Name: AspNetUserClaims_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."AspNetUserClaims_Id_seq"', 1, false);


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_id_seq', 1, false);


--
-- Name: customer_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_id_seq1', 2, true);


--
-- Name: factory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.factory_id_seq', 9, true);


--
-- Name: vehicle_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vehicle_id_seq', 18, true);


--
-- PostgreSQL database dump complete
--

