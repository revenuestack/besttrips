-- BestTrips Hotels Import
-- Generated from AWIN travel feed

-- Destinations
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('hotel', 'Hotel', 'Europe', 'Travel destination with 174 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('resort', 'Resort', 'Europe', 'Travel destination with 11 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('spa', 'Spa', 'Europe', 'Travel destination with 9 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('residence', 'Residence', 'Europe', 'Travel destination with 5 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('airport', 'Airport', 'Europe', 'Travel destination with 3 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('centre', 'Centre', 'Europe', 'Travel destination with 3 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('residences', 'Residences', 'Europe', 'Travel destination with 3 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('apartments', 'Apartments', 'Europe', 'Travel destination with 3 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('waterfront', 'Waterfront', 'Europe', 'Travel destination with 2 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('radisson', 'Radisson', 'Europe', 'Travel destination with 2 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('center', 'Center', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('riyadh', 'Riyadh', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('tallinn', 'Tallinn', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('plovdiv', 'Plovdiv', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('latvija', 'Latvija', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('grand', 'Grand', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('zori', 'Zori', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('wien', 'Wien', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('linz', 'Linz', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('rome', 'Rome', 'Italy', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('altstadt', 'Altstadt', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('mannheim', 'Mannheim', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('estate', 'Estate', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('olumpia', 'Olumpia', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('sadu', 'Sadu', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('odintsovo', 'Odintsovo', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('nydalen', 'Nydalen', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('libreville', 'Libreville', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('lietuva', 'Lietuva', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('thalasso', 'Thalasso', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('atasehir', 'Atasehir', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('reussen', 'Reussen', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('palace', 'Palace', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('arte', 'Arte', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('aziziyah', 'Aziziyah', 'Europe', 'Travel destination with 1 hotels');
INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES
  ('dhabi', 'Dhabi', 'Europe', 'Travel destination with 1 hotels');

-- Hotels
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FBIQZH-1200x628.jpg&feedId=66435&k=5ccb3f5dfba4b68a9247cf36993082f672ac02f2', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517932&a=2272397&m=7754', 'FRBIQ1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Collection Royal Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2606794%2FDKCPHROY-room_1200x628.jpg&feedId=66435&k=806de018341da9db66fb336249bc4e2bebe873d6', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517949&a=2272397&m=7754', 'DKCPHROY'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FDUBZQ_1200x630.jpg&feedId=66435&k=dcbb6841457d3d8e573c99138184af6481f79143', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517965&a=2272397&m=7754', 'IEDUBAIR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FAEDXBCNL-destination-1200x628.jpg&feedId=66435&k=bebe83d896f64e104e002c97f4c3c30f201d7248', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517973&a=2272397&m=7754', 'AEDXBCNL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FPLGDN1-room-1200x628.jpg&feedId=66435&k=83da76af16f87247da4500b859ebac76f13901c7', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517982&a=2272397&m=7754', 'PLGDN1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson Istanbul Airport', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540340%2FISTPO_1200x630.jpg&feedId=66435&k=f73b9aeb503288954562520d975a7f41fafc0160', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517995&a=2272397&m=7754', 'TRISTODA'
  FROM destinations WHERE slug = 'airport';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Bosphorus Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FTRISTBOS-destination-1200x628.jpg&feedId=66435&k=5b6aaa7b892d753a24cf09f4baa489d96236b0d4', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518003&a=2272397&m=7754', 'TRISTBOS'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Gautrain Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FJNBZH_1200x630.jpg&feedId=66435&k=3520b6906a67e6d401889002babfcf2477f1756c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518015&a=2272397&m=7754', 'ZAJNBGAU'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Royal Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FLEDZH-1200x628.jpg&feedId=66435&k=7fdd480ea029eea84aeda6fbd169b55c0aa8532d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518038&a=2272397&m=7754', 'RULEDROY'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Slavyanskaya Hotel & Business Center', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FMOWZH_1200x630.jpg&feedId=66435&k=a9fbacbe65d60f02b9770dba0b0e9675739b4f7c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518065&a=2272397&m=7754', 'RUMOWSLA'
  FROM destinations WHERE slug = 'center';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Scandinavia Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FNOOSLSCA-room_1200x628.jpg&feedId=66435&k=bc0b04dd8f73782768e94950103b1018489c0946', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518081&a=2272397&m=7754', 'NOOSLSCA'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Nofa Riyadh', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2597228%2FSARUHNOF-destination-1200x628.jpg&feedId=66435&k=3b6067c9b82f05d9b19448f3f3da10a34dc2be93', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518106&a=2272397&m=7754', 'SARUHNOF'
  FROM destinations WHERE slug = 'riyadh';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Atlantic Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FSVGZA_1200x630.jpg&feedId=66435&k=d5b924db8e1882ce71a0b27b5628e6dbe7ab63fe', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518122&a=2272397&m=7754', 'NOSVGATL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Schwarzer Bock Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F4121940%2FDEUWEBCK-1200x628.jpg&feedId=66435&k=26edbfdf1bdcc3976037d5f68f947ae7969438dc', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518140&a=2272397&m=7754', 'DEUWEBCK'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FWROZH-room-1200x628.jpg&feedId=66435&k=5c42f04502877d74fd356e1cf60f9a6713c961d4', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518148&a=2272397&m=7754', 'PLWRO1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Royal Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FBGOZH-1200x628.jpg&feedId=66435&k=1971f8d4bc29c3e039fa85c2679dbab11bb85ced', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518174&a=2272397&m=7754', 'NOBGOROY'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Conference Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FDUSZH_1200x630.jpg&feedId=66435&k=15510346755a258e90c99c05c5c59d5919e336e6', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518182&a=2272397&m=7754', 'DEDUSSCA'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Palace Hotel Tallinn', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F4121940%2FTLLZA-1200x628.jpg&feedId=66435&k=02293ecbfc6520823d3a02e2e544475c5df8452f', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518206&a=2272397&m=7754', 'EETLLPAL'
  FROM destinations WHERE slug = 'tallinn';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Hotel Imperial Plovdiv', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F4121940%2FPDVZA-1200x628.jpg&feedId=66435&k=0da6f35711c5580ceba7559af82b3eecd3e7634d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518222&a=2272397&m=7754', 'BGPLOIMP'
  FROM destinations WHERE slug = 'plovdiv';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FIELMKHSP-exterior-1200x628.jpg&feedId=66435&k=8b064fdf050d66a7dee116dae7acd67d87938da8', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518230&a=2272397&m=7754', 'IELMKHSP'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FBOOZH_1200x630.jpg&feedId=66435&k=dc63d5a82c2f2b5dec0ba2aa53e3dfade2a7d0fa', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517934&a=2272397&m=7754', 'NOBOO1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FCAIZH_1200x630.jpg&feedId=66435&k=7c83126449b7bd927d4274959a8b2c03a3a725e3', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517944&a=2272397&m=7754', 'EGCAIHEL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson RED Hotel V&A Waterfront', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2599671%2FCPTRR-room.jpg&feedId=66435&k=8af91ddff13c5cdeea8d0112a7800238afad5a59', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517952&a=2272397&m=7754', 'ZACPTVAA'
  FROM destinations WHERE slug = 'waterfront';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FELQZB_1200x630.jpg&feedId=66435&k=811e3dc8c0bae66b78fa6c5dc816f8bc0e204e7e', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517976&a=2272397&m=7754', 'SAELQ1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FGBGLA2-interior-1200x628.jpg&feedId=66435&k=207129efe8b985b28673ad7c66a067f88b8eaed5', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517985&a=2272397&m=7754', 'GBGLA2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3315891%2FTRISTASI-destination-1200x628.jpg&feedId=66435&k=a2df7e2f707df64a18443e3543822ddbc3e243e8', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517998&a=2272397&m=7754', 'TRISTASI'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FJEDZZ_1200x630.jpg&feedId=66435&k=f2969c62766e3bae0b1d0d433808f283e2cca025', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518012&a=2272397&m=7754', 'SAJEDPLZ'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel & Convention Centre', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FKGLZH_1200x630.jpg&feedId=66435&k=32527b2ef81d3914a9d0e774e43b67bdd940d610', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518020&a=2272397&m=7754', 'RWKGLCCR'
  FROM destinations WHERE slug = 'centre';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FLISZH-1200x628.jpg&feedId=66435&k=6b1f8b9400840fe64c701b87b377312918c6adb3', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518042&a=2272397&m=7754', 'PTLIS1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Collection Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FMOWZK_1200X630.jpg&feedId=66435&k=96b86890166048152a92b52b5e2057fd92ece56e', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518069&a=2272397&m=7754', 'RUMOWROY'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel Latvija', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FRIXZL_1200x630.jpg&feedId=66435&k=8e689bf1f6e01e776af48384fac354a8a68c2364', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518104&a=2272397&m=7754', 'LVRIXCSP'
  FROM destinations WHERE slug = 'latvija';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Waterfront Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FSESTOWTR-room-1200x628.jpg&feedId=66435&k=a4eba5f2d61e313d30afe9d27bfdebbe119c709d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518120&a=2272397&m=7754', 'SESTOWTR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Collection Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2597288%2FPLWAWCTR-room-1200x628.jpg&feedId=66435&k=ba87c4d5e83964e5aa2b84d07bbf7f0f3e0cb85c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518147&a=2272397&m=7754', 'PLWAWCTR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FMRSZH-1200x628.jpg&feedId=66435&k=efb08f1da8094324e0a9c37e9353e49f6ad2ca07', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518173&a=2272397&m=7754', 'FRMRSVIE'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu 1919 Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3305960%2FREKZR_room-1200x630.jpg&feedId=66435&k=d45fa5f04fe55925168668fd5f77983c2ccf6b7e', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518181&a=2272397&m=7754', 'ISREK191'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FUROZR-1200x628.jpg&feedId=66435&k=4c255247390a305cf16b241613645e233e4cdb28', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518207&a=2272397&m=7754', 'FRROU1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Collection Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2597273%2FBIORC-1200x628.jpg&feedId=66435&k=bd8b96978c99b22f35cdc634969721afa65b1add', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518231&a=2272397&m=7754', 'ESBIO1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Collection Paradise Resort & Spa', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2606833%2FAERZB-1200x628.jpg&feedId=66435&k=769b421014116351cffe32489e1a1419a2f5fde2', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517916&a=2272397&m=7754', 'RUAERPAR'
  FROM destinations WHERE slug = 'spa';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FRUAER2RK-destination-1200x628.jpg&feedId=66435&k=440d0c64586ae633440a8a0493e43fc3c8a0c898', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517918&a=2272397&m=7754', 'RUAER2RK'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel Amsterdam Airport', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FAMSZQ-1200x628.jpg&feedId=66435&k=eafa0d6e5cfffa87b8901a91e2c281f3437c30eb', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517922&a=2272397&m=7754', 'NLAMSAR2'
  FROM destinations WHERE slug = 'airport';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FARNZB_1200x630.jpg&feedId=66435&k=52b7656a80e68e503d2263bb3c903a70c2108335', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517925&a=2272397&m=7754', 'SEARN2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'The Diplomat Radisson Blu Hotel Residence & Spa', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FBHBAHDIP-destination-1200x628.jpg&feedId=66435&k=85a67fe2048a610141797c12d70f357428534157', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517927&a=2272397&m=7754', 'BHBAHDIP'
  FROM destinations WHERE slug = 'spa';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Collection Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2597288%2F%2FRSBEGMIL-room-1200x628.jpg&feedId=66435&k=c49ed5d5fe281935adf9b5d1f053145abc406122', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517928&a=2272397&m=7754', 'RSBEGMIL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Martinez Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FLBBEYMRT-destination-1200x628.jpg&feedId=66435&k=5444aa337c448673c431ae11bfae4805e49c8948', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517931&a=2272397&m=7754', 'LBBEYMRT'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Beke Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FBUDZH_1200x630.jpg&feedId=66435&k=fd76baeaa13a56cfcdf2514cc896bb0e3a4b4923', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517939&a=2272397&m=7754', 'HUBUDBEK'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3315924%2FCMNZH_1200x630.jpg&feedId=66435&k=136937809379ab4acf1cc001c5dfe8f02f255650', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517947&a=2272397&m=7754', 'MACSACTR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FDTMZH_1200x630.jpg&feedId=66435&k=adc2e08e99372d7df8144930f767ca819693f25b', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517963&a=2272397&m=7754', 'DEDTM1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'The Radisson Blu Residence', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FAEDXBMAR-destination-1200x628.jpg&feedId=66435&k=20babc674ec715dc74a283b28b6c050889c9440d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517971&a=2272397&m=7754', 'AEDXBMAR'
  FROM destinations WHERE slug = 'residence';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Scandinavia Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3305960%2FGOTZA-hotel-1200x630.jpg&feedId=66435&k=4a60fa885f8c1efb9a77268fc86f019788c92110', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517986&a=2272397&m=7754', 'SEGOTSCA'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FKGDZH_1200x630.jpg&feedId=66435&k=6e6184eb32d73d5e9b0c7ad7ac86597e1c0e0a7d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518018&a=2272397&m=7754', 'RUKGD1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Balmoral Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FLGGZR_1200x630.jpg&feedId=66435&k=22a6fa0ed73e2422b7bbd7baff8a5b8fa0a15d0f', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518041&a=2272397&m=7754', 'BESPABAL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Hormuz Grand', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2597228%2FOMMCTHOR-destination-1200x628.jpg&feedId=66435&k=13416b21b3521c9087d79560a66f4f5593f5bbb9', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518059&a=2272397&m=7754', 'OMMCTHOR'
  FROM destinations WHERE slug = 'grand';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort & Spa', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FMLAZR_1200x630.jpg&feedId=66435&k=7f059f429a0b7d5bf9b01528e5c2f560173964e0', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518061&a=2272397&m=7754', 'MTMLAGSA'
  FROM destinations WHERE slug = 'spa';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FMMAZH_1200x630.jpg&feedId=66435&k=051975c28911e3f960025dd89f3984fdf58ef51c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518063&a=2272397&m=7754', 'SEMMA2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FRUZAVRST-destination-1200x628.jpg&feedId=66435&k=ed65034bb3ea2cd340b1283f098a6fe9dd9e0007', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518071&a=2272397&m=7754', 'RUZAVRST'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Airport Terminal Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FSESTOTER-room-1200x628.jpg&feedId=66435&k=1194b2521c4a615251764385c5a5809be19437ce', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518118&a=2272397&m=7754', 'SESTOTER'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Marina Palace Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3358178%2FTURZH-room_1200x630.jpg&feedId=66435&k=9c1e1bdda7c09fc235a39cfcace2b7e157f65b40', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518137&a=2272397&m=7754', 'FITKUMAR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Astorija Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FVNOZH_1200x630.jpg&feedId=66435&k=b10f0f510fbf0bc2d49f838e7d37a26f3d0aa6b8', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518145&a=2272397&m=7754', 'LTVNOAST'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FQADOH1-destination-1200x628.jpg&feedId=66435&k=1c37cfc72ee203eaf10d23a338b2dcdcb6833d79', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518172&a=2272397&m=7754', 'QADOH1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FCGNZR_1200x630.jpg&feedId=66435&k=778617bbdf8c14a65fefdc2de31b1fde81e743bb', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518180&a=2272397&m=7754', 'DECGN1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FHRSPURSP-destination-1200x628.jpg&feedId=66435&k=23a072b8edac09c2d0bbf6f4c364166a06347a09', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518186&a=2272397&m=7754', 'HRSPURSP'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Carlton Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FBTSZH-1200x628.jpg&feedId=66435&k=cd3e5a9fb4c79814f6f5f2045cd2f3e3812c09b6', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518187&a=2272397&m=7754', 'SKBTSCAR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FKRKZH_1200x630.jpg&feedId=66435&k=45da7bd9e62dfceb79c8aa21b873eb248a308d38', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518188&a=2272397&m=7754', 'PLKRK2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540337%2FRUMOW1SH-destination-1200x628.jpg&feedId=66435&k=7bf2026434bd88b29e46019fa70816e74dbfa212', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518192&a=2272397&m=7754', 'RUMOW1SH'
  FROM destinations WHERE slug = 'radisson';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Astrid Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FANRZR_1200x630.jpg&feedId=66435&k=cbb86d21330c7c465b034df7518ea8defa565457', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518198&a=2272397&m=7754', 'BEANRAST'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FDEHAJ1-room-1200x628.jpg&feedId=66435&k=da7551fea9c50fd70efae0115fa44891f0f48b9f', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518199&a=2272397&m=7754', 'DEHAJ1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FNCEZH_1200x630.jpg&feedId=66435&k=7744c51b6a978cf41dd5a81f0d2609c9368cc2bd', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518200&a=2272397&m=7754', 'FRNCE1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FQHAZH-1200x628.jpg&feedId=66435&k=0fb4743a3d182ecc947d67294d62aff10b94884d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518201&a=2272397&m=7754', 'BEQHA1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson RED Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2599671%2FBRUZR-room.jpg&feedId=66435&k=372bb8420a4988187fb67046d13625f0bc4f47c4', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518202&a=2272397&m=7754', 'BEBRUEUR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3315924%2FBKOZH-room-1200x630.jpg&feedId=66435&k=3671191e29ac5d954c9e9aae43660a3e116be0a8', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517933&a=2272397&m=7754', 'MLBKO1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu St. Helen''s Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FDUBZH_1200x630.jpg&feedId=66435&k=b50f07eda8b48d02fcc4724e246bcc55e5c60d69', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517964&a=2272397&m=7754', 'IEDUBHEL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FAEDXBWTR-destination-1200x628.jpg&feedId=66435&k=08ca240d522f023891b30d793301bd5d3bcf8015', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517972&a=2272397&m=7754', 'AEDXBWTR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FEVNZR-1200x628.jpg&feedId=66435&k=9e242a3437077cf11ae25f0f637f197be92a80ca', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517980&a=2272397&m=7754', 'AMEVN1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FDEHAM1-room-1200x628.jpg&feedId=66435&k=09497a408a175820ca6f3affe59408f77bccc0a4', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517988&a=2272397&m=7754', 'DEHAM1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Residences', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3062226%2FISTZD-1200x628.jpg&feedId=66435&k=f5f41bb14ae0d7bdc04f881ca1eaf81a636fbd37', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518000&a=2272397&m=7754', 'TRISTVD2'
  FROM destinations WHERE slug = 'residences';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Metropol Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FJHEZD_1200x630.jpg&feedId=66435&k=2fd2b419b1fd05fd58baa61b1741ed3c23d74f81', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518014&a=2272397&m=7754', 'SEJHEMET'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson Serviced Apartments', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540340%2FLOSPB_1200x630.jpg&feedId=66435&k=caf467cb263695b5f41efa5c5b064b0bea817c50', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518045&a=2272397&m=7754', 'NGLOSVIC'
  FROM destinations WHERE slug = 'apartments';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Anchorage Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FLOSZA_1200x630.jpg&feedId=66435&k=25ae790a72f883c952efca3fcaf78d4a17dc2d5e', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518046&a=2272397&m=7754', 'NGLOSANC'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort & Spa', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FLPAZM_1200x630.jpg&feedId=66435&k=cfde4e57b86bdb590277c51d8c7449dc328c3037', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518049&a=2272397&m=7754', 'ESGRCRSP'
  FROM destinations WHERE slug = 'spa';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FGBLPL1-interior-1200x628.jpg&feedId=66435&k=e5dfc88d1934cad98272c91961d68b6e68090739', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518050&a=2272397&m=7754', 'GBLPL1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FLUNZH_1200x630.jpg&feedId=66435&k=9d95db5cc2703799a4613990bf86a9bd7763a81d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518051&a=2272397&m=7754', 'ZMLUN1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Polar Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FNOLYRPOL-1200x628.jpg&feedId=66435&k=a3395c0306ebb5d55a789076953ad950c2078f40', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518053&a=2272397&m=7754', 'NOLYRPOL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FMADZH-1200x628.jpg&feedId=66435&k=027e0910b520aa377dcfd47f9d60c5acab26a757', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518054&a=2272397&m=7754', 'ESMADPRA'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FOMMCT2-destination-1200x628.jpg&feedId=66435&k=c1bb7519a1f4d99e1a12d1899b0dc2f832e8d4de', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518058&a=2272397&m=7754', 'OMMCT2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FMCTZS_1200x630.jpg&feedId=66435&k=3e394d3f9c8ed118bfcff58a7626ed4e67c83ec1', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518060&a=2272397&m=7754', 'OMSOH1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson Poliarnie Zori', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540337%2FMMKPD_1200x630.jpg&feedId=66435&k=9bb154be88aa699d5d52d96e31db77c1af6ebcdd', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518064&a=2272397&m=7754', 'RUMMKPOL'
  FROM destinations WHERE slug = 'zori';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FMPMZH_1200x630.jpg&feedId=66435&k=aab97e7c3b005bdff3e0ae2b675082ff3a13776a', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518072&a=2272397&m=7754', 'MZMPMHRD'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel and Residence', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FSARUHDIP-destination-1200x628.jpg&feedId=66435&k=6aea007b2277b092957bfe6d62db95428313379a', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518107&a=2272397&m=7754', 'SARUHDIP'
  FROM destinations WHERE slug = 'residence';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FRUMOW2SH-destination-1200x628.jpg&feedId=66435&k=2d362a27f08a72ffa9ffcc956879bcc6331b18e3', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518123&a=2272397&m=7754', 'RUMOW2SH'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Style Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FVIEZS_1200x630.jpg&feedId=66435&k=950650bb8e6750df67dc9b949971d7a856c8dd7b', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518142&a=2272397&m=7754', 'ATVIESTY'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Royal Garden Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FTRDZH_1200x630.jpg&feedId=66435&k=ce092558c5aa2f225d3ad1fa9320e728e90654c6', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518177&a=2272397&m=7754', 'NOTRDGDN'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FPRGZA_1200x630.jpg&feedId=66435&k=3a970f9738274ec870fa199ebbee2ca964834cbd', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518203&a=2272397&m=7754', 'CZPRG2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FMAAGARST-1200x628.jpeg&feedId=66435&k=6a01a76a3d5f47c50ca09ec1a29dab60f7a8f5d3', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518233&a=2272397&m=7754', 'MAAGARST'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Belgrade Art Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F4121940%2FRSBEGART-1200x628.jpg&feedId=66435&k=1bb334a3c0bb15f2c460eaa5c4ec221810585f0e', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518239&a=2272397&m=7754', 'RSBEGART'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Collection Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2597288%2FITVCENAN-room-1200x628.jpg&feedId=66435&k=f26fc1a3658168e659bcc71c8dc4e671fcfe9ee3', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518241&a=2272397&m=7754', 'ITVCENAN'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Hotel Rathauspark Wien', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F4121940%2FATVIERHP-1200x628.jpg&feedId=66435&k=cf791127db11b75bbec5a381a039a57120ea2c6f', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518242&a=2272397&m=7754', 'ATVIERHP'
  FROM destinations WHERE slug = 'wien';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Hotel Schillerpark Linz', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F4121940%2FATLNZSCH-1200x628.jpg&feedId=66435&k=774a0d543c248da4f4f69c5afd0cb5b939d7d163', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518243&a=2272397&m=7754', 'ATLNZSCH'
  FROM destinations WHERE slug = 'linz';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel & Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FAEAUHCOR-destination-1200x628.jpg&feedId=66435&k=832b311bd642d1ae0f23c8774177e25329b9e762', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518244&a=2272397&m=7754', 'AEAUHCOR'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Palazzo Montemartini Rome', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2597258%2FROMRC.jpg&feedId=66435&k=a7e7232c941713d8b218f4f06f32b4523a3fae1c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518246&a=2272397&m=7754', 'ITROMPAL'
  FROM destinations WHERE slug = 'rome';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel Altstadt', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FATSALZBG-1200x628.jpg&feedId=66435&k=7fa83e00167ccee8bc649a0f919e6ab8ecc5f3e4', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518248&a=2272397&m=7754', 'ATSZGALT'
  FROM destinations WHERE slug = 'altstadt';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FTLSZQ_1200x630.jpg&feedId=66435&k=c4ecaf84fd7ca89b81a1508c2b1def41fe381458', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518251&a=2272397&m=7754', 'FRTLSAIR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'LanzCarré Hotel Mannheim', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F4121940%2FDEMHGLAN-destination-1200x628.jpg&feedId=66435&k=7c9fab79de9aca19c9d1819b1ee174ead7804204', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518252&a=2272397&m=7754', 'DEMHGLAN'
  FROM destinations WHERE slug = 'mannheim';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel & Spa', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FEGHRGRST-destination-1200x628.jpg&feedId=66435&k=ed95a0bf13023debbb31d020d3f5de971d2c644a', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518253&a=2272397&m=7754', 'IESXLHSP'
  FROM destinations WHERE slug = 'spa';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3062226%2FMGTNRWT1-room-1200x628.jpg&feedId=66435&k=651389899a860b53fa6bab18062915498d36599d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518254&a=2272397&m=7754', 'MGTNRWT1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Serviced Apartments', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3062226%2FMGTNRSAP-room-1200x628.jpg&feedId=66435&k=8c7d1bc8e8d5658b6704feecc36f068cdb15246b', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518255&a=2272397&m=7754', 'MGTNRSAP'
  FROM destinations WHERE slug = 'apartments';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FRUCEK1-destination-1200x628.jpg&feedId=66435&k=fe59641f342021c10fdac7f526d2b635806ebea6', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517946&a=2272397&m=7754', 'RUCEK1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Park Hotel & Conference Centre', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FDRSZR_1200x630.jpg&feedId=66435&k=37f8e7f78f99817f9309aa0228a2b80f8ad1a369', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517962&a=2272397&m=7754', 'DEDRSCCR'
  FROM destinations WHERE slug = 'centre';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FAEDXBMED-destination-1200x628.jpg&feedId=66435&k=0e532b07b870086f8a80f2286ae6841d91129452', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517970&a=2272397&m=7754', 'AEDXBMED'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FERFZH_1200x630.jpg&feedId=66435&k=b7541a5877463089a347e463bcfc1f4bb60cd046', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517979&a=2272397&m=7754', 'DEERF1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Riverside Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FGOTZB_1200x630.jpg&feedId=66435&k=789ee0b6b3cd1900c5307d0f5de4e8dc31bf4a9e', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517987&a=2272397&m=7754', 'SEGOTRIV'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3315891%2FISTZC-room_1200x630.jpg&feedId=66435&k=60bd24a29b9f32d53c8224544aee503207b8d01b', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517999&a=2272397&m=7754', 'TRISTVD1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Waterfront Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FJERZR_1200x630.jpg&feedId=66435&k=9cafef05482e7815c50a8ff25b7c8d29197df18b', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518013&a=2272397&m=7754', 'GBJERWTR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Leogrand Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FKIVZL_1200x630.jpg&feedId=66435&k=c65f611180d5907a4524ff966aab41e20d7b33b4', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518021&a=2272397&m=7754', 'MDKIVLEO'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Plaza Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FLJUZR_1200x630.jpg&feedId=66435&k=c5473380bd840116c32203fb4ac3cee1b07016e5', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518043&a=2272397&m=7754', 'SILJUPLZ'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Residences', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FRUZAVRES-destination-1200x628.jpg&feedId=66435&k=96cca3a6f093acdee02865b29464b560ebca5cbf', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518068&a=2272397&m=7754', 'RUZAVRES'
  FROM destinations WHERE slug = 'residences';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Elizabete Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FRIXZE_1200X630.jpg&feedId=66435&k=b172c0ddf9a08a491735fb3272160baa48fb6ef7', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518103&a=2272397&m=7754', 'LVRIXELI'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Royal Viking Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FSESTOVIK-room-1200x628.jpg&feedId=66435&k=cb42913f818177e5c9cd9f4c19eaa34f403df5f1', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518119&a=2272397&m=7754', 'SESTOVIK'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FT6RZR_1200x630.jpg&feedId=66435&k=a320cd6e53da49e27fe35e4729f4903367c68541', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518125&a=2272397&m=7754', 'NOTRYRST'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FTASZH_1200x630.jpg&feedId=66435&k=208d8e1ef4fd1e5d6c816482fdd628c41142c738', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518126&a=2272397&m=7754', 'UZTAS1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Tsinandali Estate', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2597258%2FTBSRC.jpg&feedId=66435&k=f7b12af50f7c261012a4472949e67433d6c9267b', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518127&a=2272397&m=7754', 'GETSLEST'
  FROM destinations WHERE slug = 'estate';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Al Mahary Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FTIPZR_1200x630.jpg&feedId=66435&k=29e2cecbdac808902dfed67492a326d863752ffb', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518128&a=2272397&m=7754', 'LYTIPALM'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel Olumpia', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FTLLZR_1200X630.jpg&feedId=66435&k=ffff4e3dbc3fd652c8aa26a05bd2ef1cddc14d5d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518131&a=2272397&m=7754', 'EETLLOLU'
  FROM destinations WHERE slug = 'olumpia';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Tammer Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FTMPZR_1200x630.jpg&feedId=66435&k=dfda52f0ebfb74dc46b50bf14af5d3fb69ed0336', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518132&a=2272397&m=7754', 'FITMPGRA'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FTOSZH_1200x630.jpg&feedId=66435&k=f739b762b1d955d1f0db23eae917924311a94f81', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518133&a=2272397&m=7754', 'NOTOS1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FTRDZQ_1200x630.jpg&feedId=66435&k=05b7de6443f27902e8b06c23987fafcaa6ad47cf', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518134&a=2272397&m=7754', 'NOTRDAIR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Park Royal Palace Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540328%2FVIEZA_1200x630.jpg&feedId=66435&k=ef28e7bc236086c07b3196933453392b789a3547', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518141&a=2272397&m=7754', 'ATVIEPAL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FFRLYS1-destination-1200x628.jpg&feedId=66435&k=1aa73479245ae14668f8e5f385e6f2b2c0f38eb3', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518168&a=2272397&m=7754', 'FRLYS1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FITMIL1-destination-1200x628.jpg&feedId=66435&k=f2140fb3775beabd7c6a9cf3ae85f9052a603adf', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518176&a=2272397&m=7754', 'ITMIL1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FAEAUH2YS-destination-1200x628.jpg&feedId=66435&k=66199c5fdee56f65b45c1d71e01e77162fa66066', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518184&a=2272397&m=7754', 'AEAUH2YS'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FQORZR_1200x630.jpg&feedId=66435&k=33d1acda7052fd17a660366ba94dea00f49356cd', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518224&a=2272397&m=7754', 'TRQOR1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Alagna Mountain Resort & Spa', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F4121940%2FTRNDZA-1200x628.jpg&feedId=66435&k=e4cba857d2900a6291dfb2c804387cecaa6d8ba4', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518232&a=2272397&m=7754', 'ITTRNAMR'
  FROM destinations WHERE slug = 'spa';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3305963%2FBREZH-room_1200x630.jpg&feedId=66435&k=43336ec5c83ee60a633010273d7d94489ec3a41d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517935&a=2272397&m=7754', 'DEBRE1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FCBUZH_1200x630.jpg&feedId=66435&k=d79c8950a234341b0a9b3c157683be38e8d5e215', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517945&a=2272397&m=7754', 'DECBU1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FDMMZR_1200x630.jpg&feedId=66435&k=65ce0be9287c99c1c1dc22b746edc9ba8e53682c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517961&a=2272397&m=7754', 'SADHR1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FDXBZA_1200x630.jpg&feedId=66435&k=2b9f101d08156223f93d5541578db2610f806227', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517969&a=2272397&m=7754', 'AEDXBDEI'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FEDIZA_1200x630.jpg&feedId=66435&k=0ecf8aa0e195b2552197bef26488c53b4b8b2dea', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517975&a=2272397&m=7754', 'GBEDICTR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Mammy Yoko Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FFNAZR_1200x630.jpg&feedId=66435&k=0e2a58509e91c68942ee982ea76f17070207cb1c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517981&a=2272397&m=7754', 'SLFNAYOK'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FISTZG_1200x630.jpg&feedId=66435&k=c90f9a5033e1dbdcb257c3833b36eb8f9e8b05cb', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518002&a=2272397&m=7754', 'TRISTPER'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FJNBZS_1200x630.jpg&feedId=66435&k=b83f1162de1e15fcac1bc91b8bc6f950bcbc04e0', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518016&a=2272397&m=7754', 'ZAJNBSA2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Sonya Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FLEDZS-1200x628.jpg&feedId=66435&k=835e09be31912831431c220cc946dac2431a679c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518039&a=2272397&m=7754', 'RULEDSON'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson Sadu', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540337%2FMOWPD_1200x630.jpg&feedId=66435&k=2e463e8ce0c8437b7ee01329e8b73a180700edb2', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518066&a=2272397&m=7754', 'RUMOWSAD'
  FROM destinations WHERE slug = 'sadu';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel & Residence', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FKENBOHRD-destination-1200x628.jpg&feedId=66435&k=f2e64c8dcd3699d7c5879e40e64c5d1ce795f759', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518074&a=2272397&m=7754', 'KENBOHRD'
  FROM destinations WHERE slug = 'residence';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FNOOSLALN-room_1200x628.jpg&feedId=66435&k=6394f7ca47dcd671e31a55f4225a38c5443719a5', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518082&a=2272397&m=7754', 'NOOSLALN'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FSARUH1-destination-1200x628.jpg&feedId=66435&k=153dcf3036a94e7ff5a347beb351006a8921cc38', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518108&a=2272397&m=7754', 'SARUH1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Collection Strand Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2606794%2FSESTOSTR-room-1200x628.jpg&feedId=66435&k=3a62729e299d608a9ad672467e130383902fc55f', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518116&a=2272397&m=7754', 'SESTOSTR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson Odintsovo', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540337%2FVKOPO_1200x630.jpg&feedId=66435&k=3007f8115ac768463211ac3f748fbecf129a2b83', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518143&a=2272397&m=7754', 'RUVKO1'
  FROM destinations WHERE slug = 'odintsovo';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3315921%2FBSLZH-room-1200x630.jpg&feedId=66435&k=8b07fa0a3928b52acfa347c409da414be6c3cbba', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517937&a=2272397&m=7754', 'CHBSL1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FROBUH1-room-1200x628.jpg&feedId=66435&k=685b42d85c3efa3c280c5b0d8b7220f250bed37a', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517942&a=2272397&m=7754', 'ROBUH1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu M’Bamou Palace Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FBZVZR_1200x630.jpg&feedId=66435&k=806a1db4146cfc29d0724e4b3dbb2174276e34ce', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517943&a=2272397&m=7754', 'CGBZVMBA'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Media Harbour Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FDUSZR_1200x630.jpg&feedId=66435&k=e6ac9a703592a16d51dc0e8cb296fc503d5264a4', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517966&a=2272397&m=7754', 'DEDUSMED'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Caledonien Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FKRSZR_1200x630.jpg&feedId=66435&k=64182a0e76904d89c94c553e649389c4b1daee6f', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518023&a=2272397&m=7754', 'NOKRSCAL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3062226%2FKUNPR_1200x628.jpg&feedId=66435&k=6ea5613db5ef5804958bd39428677777c76aa8c6', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518025&a=2272397&m=7754', 'LTKUN1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel Nydalen', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FOSLZX_1200x630.jpg&feedId=66435&k=67a8355e2c13683c897ff3801a37671ca679df83', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518178&a=2272397&m=7754', 'NOOSLNYL'
  FROM destinations WHERE slug = 'nydalen';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Sobieski Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FPLWAWSOB-room-1200x628.jpg&feedId=66435&k=9e92b08fa3b45183dae99796c8ae856b3fbd5962', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518212&a=2272397&m=7754', 'PLWAWSOB'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Collection Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2597228%2FBKORC-1200x628.jpg&feedId=66435&k=02167679db3d771143a62d00fdf39cdb774e53d3', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518227&a=2272397&m=7754', 'MLBKO2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FKWIZH_1200x630.jpg&feedId=66435&k=64a12d7e3d2abf3fe8cb5f1ee00933e422f12229', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518026&a=2272397&m=7754', 'KWKWI1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Daugava Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FRIXZH_1200X630.jpg&feedId=66435&k=1bf5d01e6b7ffadd77c2277efe25d8f0942be95b', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518027&a=2272397&m=7754', 'LVRIXDAU'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FGBLBACTR-interior-1200x628.jpg&feedId=66435&k=a05a16ef874feae12980b69fb0c746482c9df48f', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518028&a=2272397&m=7754', 'GBLBACTR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Senator Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FDELBCSEN-destination-1200x628.jpg&feedId=66435&k=074a9fb76de8c26db25b28321e92b73aac44ffc5', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518030&a=2272397&m=7754', 'DELBCSEN'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson Libreville', 'hotel', 'Explore the beach', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518031&a=2272397&m=7754', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540340%2FLBVPD_1200x630.jpg&feedId=66435&k=3eaa1fe5c035af2a9ff3a8a2b98020af56224ef6'
  FROM destinations WHERE slug = 'libreville';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Okoumé Palace Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FLBVZH_1200x630.jpg&feedId=66435&k=d52e480a954da8d3390bdd4dafa0e5099e276c02', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518032&a=2272397&m=7754', 'GALBVOKO'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FLCAZR_1200x630.jpg&feedId=66435&k=4645913f1efce0b8c91702cfba1d2a0c29dc2e93', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518033&a=2272397&m=7754', 'CYLCA1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Olympiyskiy Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3315891%2FMOWZO_1200x630.jpg&feedId=66435&k=5b81bd528d2fb4ac9596996ae920ea1beb1fe62b', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518070&a=2272397&m=7754', 'RUMOWOLY'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FNTEZH_1200x630.jpg&feedId=66435&k=ad8dc643dafafd72a38a4e0761d468f5184a425d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518078&a=2272397&m=7754', 'FRNTE1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FAEFJRRST-destination-1200x628.jpg&feedId=66435&k=1f93ca07937b7830899078cb454a1bfe03588d94', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518105&a=2272397&m=7754', 'AEFJRRST'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel London Stansted Airport', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FGBSTNAIR-interior-1200x628_V2.jpg&feedId=66435&k=82d30a939a14629b00455d28f82e92d39c7b060c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518113&a=2272397&m=7754', 'GBSTNAIR'
  FROM destinations WHERE slug = 'airport';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FTZXZR_1200x630.jpg&feedId=66435&k=00d882ac414fa3bfed4541312048d6b4b260668a', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518138&a=2272397&m=7754', 'TRTZX1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel Lietuva', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FVNOZL_1200X630.jpg&feedId=66435&k=ae32778c29ed017c50c63eeba4b9eb336b54ac92', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518146&a=2272397&m=7754', 'LTVNOLIE'
  FROM destinations WHERE slug = 'lietuva';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Collection Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F4121940%2FDEBER1-1200x628.jpg&feedId=66435&k=23742b9d7ff83cd721cbe6273d4da2200524b1a3', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518179&a=2272397&m=7754', 'DEBER1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Palace Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FLGGZH_1200x630.jpg&feedId=66435&k=2716a8e4b6032e63d491b6073b985c74a3961acb', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518205&a=2272397&m=7754', 'BESPAPAL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu 1835 Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FCEQZA-1200x628.jpg&feedId=66435&k=10339b433b85f27fa52c8147473c9d8c8d98247e', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518213&a=2272397&m=7754', 'FRCEQ183'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FRUHZR-1200x628.jpg&feedId=66435&k=dcc5ad766aef3c69522cfd98e08b4423f2b23fd9', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518228&a=2272397&m=7754', 'SARUHQUR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FESGRCRST-destination-1200x628.jpg&feedId=66435&k=a0d90d78ebb607be5bf13453ae2b1f42245a60a2', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518236&a=2272397&m=7754', 'ESGRCRST'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Limfjord Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FAALZH_1200x630.jpg&feedId=66435&k=06a255a2f8d1fa641f32b1ee21edb3facb343d64', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517908&a=2272397&m=7754', 'DKAALLIM'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel & Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FAEAANRST-destination-1200x628.jpg&feedId=66435&k=dca4c5f4465b07887445139eca2322e00764798e', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517909&a=2272397&m=7754', 'AEAANRST'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Scandinavia Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FAARZH_1200x630.jpg&feedId=66435&k=1bd6efe546b26166f241cb3854ea2abf3aa347a7', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517911&a=2272397&m=7754', 'DKAARSCA'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FABJZR_1200x630.jpg&feedId=66435&k=1de0345766728fa52f108f46a97cc5ac507c4a47', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517912&a=2272397&m=7754', 'CIABJAIR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FETADD1-room-1200x628.jpg&feedId=66435&k=b5a174348be26a2d3e8f85084d8493a3a76873f8', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517914&a=2272397&m=7754', 'ETADD1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort & Congress Centre', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FAERZI_1200x630.jpg&feedId=66435&k=d232869ae2d7c4b54c7246f9901f18cb8ba3e3c9', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517917&a=2272397&m=7754', 'RUAERRCC'
  FROM destinations WHERE slug = 'centre';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FALYZR-1200x628.jpg&feedId=66435&k=79fb645321dedf0ced3ac04c96f8105a06f98f67', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517919&a=2272397&m=7754', 'EGALY1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FNLAMSCTR-room-1200x628.jpg&feedId=66435&k=1d569ec5c63026e85b08716c85adb5194b976325', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517921&a=2272397&m=7754', 'NLAMSCTR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FANKZH_1200x630.jpg&feedId=66435&k=f6c78eb9b4fe8366b8f958b99f96c484f4485961', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517924&a=2272397&m=7754', 'TRANK1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FLBBEYVER-destination-1200x628.jpg&feedId=66435&k=0db2a0e5977bef3d91c095e46ba98c95a91268ab', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517930&a=2272397&m=7754', 'LBBEYVER'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Scandinavia Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FCPHZA_1200x630.jpg&feedId=66435&k=dd369ca6f7e5308396275178153eab719a0e5aec', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517948&a=2272397&m=7754', 'DKCPHSCA'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel Waterfront', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FZACPTWTR-destination-1200x628.jpg&feedId=66435&k=5f2f6f2ccb4fb3dff3302ac8329d5671e79f9f81', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517953&a=2272397&m=7754', 'ZACPTWTR'
  FROM destinations WHERE slug = 'waterfront';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel & Residence', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FCPTZD_1200x630.jpg&feedId=66435&k=5bd174dbe46940230797a4e7cca699051227c89c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517954&a=2272397&m=7754', 'ZACPTHRD'
  FROM destinations WHERE slug = 'residence';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Residence', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FDHAZS_1200x630.jpg&feedId=66435&k=45063fd9b032dde5abd6446b0ffa799a64f89e5d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517956&a=2272397&m=7754', 'SAKHORES'
  FROM destinations WHERE slug = 'residence';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FDIYZR_1200x630.jpg&feedId=66435&k=e76eb4c9773387a255b85717848c0e0ac4b0738e', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517957&a=2272397&m=7754', 'TRDIY1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Palace Resort & Thalasso', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FDJEZR_1200x630.jpg&feedId=66435&k=6e9c20d4a28728e1b969271d6f7e4931abd575cf', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517958&a=2272397&m=7754', 'TNDJERTH'
  FROM destinations WHERE slug = 'thalasso';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FDKRZH_1200x630.jpg&feedId=66435&k=77d22d6764a4b04a7e64a85a7f0d2f2774e623bf', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517960&a=2272397&m=7754', 'SNDKRPLZ'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FGBEMAAIR-interior-1200x628.jpg&feedId=66435&k=2c91bd6837d00781d128a38e5cdd4b3aff606109', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517977&a=2272397&m=7754', 'GBEMAAIR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson RED Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2599752%2FGBGLA1-interior-1200x628.jpg&feedId=66435&k=099ec7466ce031784b8aca83029ee2c2bf8031e9', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517984&a=2272397&m=7754', 'GBGLA1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FIEVZH_1200X630.jpg&feedId=66435&k=054453941237203a1f632f24df44ac899413b3fe', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517990&a=2272397&m=7754', 'UAIEV1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FUAIEVPOD-room-1200x628.jpg&feedId=66435&k=54465150abc93986a971441231f3703545f9dbab', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517991&a=2272397&m=7754', 'UAIEVPOD'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FUAIFORST-room-1200x628.jpg&feedId=66435&k=b284f9bd4ecd478890a5ca945c95d06adee204d2', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517992&a=2272397&m=7754', 'UAIFORST'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson Atasehir', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540340%2FISTPA_1200x630.jpg&feedId=66435&k=bdb372940f35e24d2c351ebdf23320091d72eaad', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826517993&a=2272397&m=7754', 'TRISTATS'
  FROM destinations WHERE slug = 'atasehir';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FISTZS-1200x628.jpg&feedId=66435&k=0e7d5682b2265f1170275a53786ec1fbb0059316', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518006&a=2272397&m=7754', 'TRISTSIS'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FTRISTTUZ-1200x628.jpg&feedId=66435&k=e23eed08a2fb5854683b1cfac9cf32649831769d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518007&a=2272397&m=7754', 'TRISTTUZ'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FJEDZA_1200x630.jpg&feedId=66435&k=9e08ad9fa9905035b9f7f628bbfe1da96e4e0c00', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518010&a=2272397&m=7754', 'SAJEDALS'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FSAJEDCOR-destination-1200x628.jpg&feedId=66435&k=9ff80e1c132c8b17af05984f1ced7df5ea2307d8', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518011&a=2272397&m=7754', 'SAJEDCOR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540340%2FKGLPD_1200x630.jpg&feedId=66435&k=4680b64cf947cc0bac35821fe68e2af07b5f3471', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518019&a=2272397&m=7754', 'RWKGL1'
  FROM destinations WHERE slug = 'radisson';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Belorusskaya Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FRUMOWBEL-destination-1200x628.jpg&feedId=66435&k=0a8ad6276301aa5ce2ce59cc577cb23b3fc896aa', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518067&a=2272397&m=7754', 'RUMOWBEL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FNDJZR_1200x630.jpg&feedId=66435&k=12e8db384b81a81aa28b8fd1ffafdd45df342085', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518075&a=2272397&m=7754', 'TDNDJ1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Plaza Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FOSLZH_1200x630.jpg&feedId=66435&k=a8ca60be2d8cb3b194f6c3f920ebea8a69cb8aab', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518083&a=2272397&m=7754', 'NOOSLPLZ'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Airport Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FNOGARAR2-room_1200x628.jpg&feedId=66435&k=deb553c8a8c3da8316e16a0a3f194326537057df', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518084&a=2272397&m=7754', 'NOGARAR2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FFIOUL1-room-1200x628.jpg&feedId=66435&k=3a1342d479138930bb61b71a5ff4fe34a51e12ad', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518085&a=2272397&m=7754', 'FIOUL1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FPARZB_1200x630.jpg&feedId=66435&k=874d3b70a9575b3b76f57cc85dc5b578aaaa3a89', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518086&a=2272397&m=7754', 'FRPARBOU'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FPLLZR_1200x630.jpg&feedId=66435&k=35703620a189617ff9d0ced1792f6707ee79bcfc', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518087&a=2272397&m=7754', 'ZAPLZ1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FAEQAJ1-destination-1200x628.jpg&feedId=66435&k=e094bdf6e89c0ebb71bb9be711701bc687f1be25', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518089&a=2272397&m=7754', 'AEQAJ1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Hotel and Apartments', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540340%2FQDMPI.jpg&feedId=66435&k=28de6ef6832912067dd268764c4b138cf045625d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518092&a=2272397&m=7754', 'SADAMIND'
  FROM destinations WHERE slug = 'apartments';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FQDMZM_1200x630.jpg&feedId=66435&k=76601493014e237415351c2731b0c2ea5847884c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518093&a=2272397&m=7754', 'SAKHOHMB'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FQGLZH-1200x628.jpg&feedId=66435&k=8f440d5d3fe45ab391e610e3f0cd1f9b542d0e4e', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518094&a=2272397&m=7754', 'CHQGL1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel Reussen', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FCHANDREU-destination-1200x628.jpg&feedId=66435&k=b8f5e657ef61429108dd74fd2532dbfbb3a3e5ce', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518097&a=2272397&m=7754', 'CHANDREU'
  FROM destinations WHERE slug = 'reussen';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FQLJZH_1200x630.jpg&feedId=66435&k=f554f5b5b399f715ef82f33e2be872643f5abd45', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518098&a=2272397&m=7754', 'CHQLJ1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FMARAKCAR-destination-1200x628.jpg&feedId=66435&k=94b1f11f3f20f44ec34f2185945ccc86bc7aef00', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518100&a=2272397&m=7754', 'MARAKCAR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson Palace', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536145%2FSENPD_1200x630.jpg&feedId=66435&k=60bc9d52c95dacd80a806088e4b4c338352ba750', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518109&a=2272397&m=7754', 'GBSENPAL'
  FROM destinations WHERE slug = 'palace';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Arlandia Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FSESTOARL-room-1200x628.jpg&feedId=66435&k=91fa89b393a94421bb2f69af88d947479081c2db', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518117&a=2272397&m=7754', 'SESTOARL'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Papirfabrikken Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FXAHZH_1200x630.jpg&feedId=66435&k=617507f398f9df413fdc0d26d4dd55ce7d0ce568', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518149&a=2272397&m=7754', 'DKXAHPAP'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FXGCZH_1200x630.jpg&feedId=66435&k=e8bf8ffd7cd73256b0e80c8d4684fe691779e356', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518150&a=2272397&m=7754', 'SEXGC1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FGBXVU1-destination-1200x628.jpg&feedId=66435&k=5df76f3b663d4f8348871600199452829146ac35', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518151&a=2272397&m=7754', 'GBXVU1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540343%2FYNBZH_1200x630.jpg&feedId=66435&k=fd9c684a9dfe334989033aa5e918b2fcc6f42e95', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518152&a=2272397&m=7754', 'SAYNB1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FZRHZQ-1200x630.jpg&feedId=66435&k=629f6980e46b7d8945ec8d443540cccb3b0579e0', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518154&a=2272397&m=7754', 'CHZRHAR2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3358196%2FZROZR_1200x630.jpg&feedId=66435&k=63f0bd27592d4faf96a70a1ecbcfa2d7415e0a8f', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518155&a=2272397&m=7754', 'DERLG1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Fürst Leopold Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FZSUZH_1200x630.jpg&feedId=66435&k=9829a1863fcc658a1d32c0be65785cd5ac5e49ab', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518156&a=2272397&m=7754', 'DEDESFLE'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Iveria Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FTBSZH_1200X630.jpg&feedId=66435&k=201cce0ac7fcc6b5ec0e5867180fb9b474d5ef8c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518157&a=2272397&m=7754', 'GETBSIVE'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Hotel Paseo Del Arte', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2599752%2FMADRR-room-1200x628.jpg&feedId=66435&k=4704ada11c2cfc92de41e2526caea09374194dde', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518158&a=2272397&m=7754', 'ESMAD1'
  FROM destinations WHERE slug = 'arte';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson Makkah Aziziyah', 'hotel', 'Stay modern in the Holy City', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518159&a=2272397&m=7754', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3649970%2FParkInn_Interior_1200x630.jpg&feedId=66435&k=4cbcc6c1bd07c50eabdc8bd7d89052b52b1652bb'
  FROM destinations WHERE slug = 'aziziyah';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F3504988%2FROVZR_1200X630.jpg&feedId=66435&k=d2878ca36f74211c504e263f84b68bb6e39a4222', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518162&a=2272397&m=7754', 'RUROV1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FHAMZQ_1200x630.jpg&feedId=66435&k=8942d77d80be685b859ada2224ce7fa30ce2379c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518163&a=2272397&m=7754', 'DEHAMAIR'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Park Inn by Radisson Abu Dhabi', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2540340%2FAEAUH1YS-destination-1200x628.jpg&feedId=66435&k=fe5c309b5ae8cd6507bd5ea10ae908cb67b9906c', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518164&a=2272397&m=7754', 'AEAUH1YS'
  FROM destinations WHERE slug = 'dhabi';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Mountain Resort', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FVDBZR-1200x628.jpg&feedId=66435&k=38e43b259e57d51cc8e28c2c1d99e23524b43b01', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518167&a=2272397&m=7754', 'NOVDBRST'
  FROM destinations WHERE slug = 'resort';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FDEFRA1-room-1200x628.jpg&feedId=66435&k=750013226dacc97442a789abe0c3c45a97a1812d', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518175&a=2272397&m=7754', 'DEFRA1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel & Residences', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FKRKZR_1200x630.jpg&feedId=66435&k=608eed8e73ed0629b7745b03874fea56705568e4', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518209&a=2272397&m=7754', 'PLZAKHRD'
  FROM destinations WHERE slug = 'residences';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Park Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536148%2FGRATHPRK-1200x628.jpg&feedId=66435&k=6a7d53381c1365de6cbc446a1f65152e6770c282', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518214&a=2272397&m=7754', 'GRATHPRK'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Resort & Spa', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536151%2FTRIZMRSP-destination-1200x628.jpg&feedId=66435&k=e0bdbf00b6315b696fe68efb1ae3eee47fa963c7', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518216&a=2272397&m=7754', 'TRIZMRSP'
  FROM destinations WHERE slug = 'spa';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Plaza Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536133%2FHELZR_1200x630.jpg&feedId=66435&k=40d1621fa6b87837d65048ffa9b7ac02f6319509', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518217&a=2272397&m=7754', 'FIHELPLZ'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FGBBHX1-exterior-1200x628.jpg&feedId=66435&k=c594d8e48127447eff92986d8358bfb10a5e11b8', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518218&a=2272397&m=7754', 'GBBHX1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel & Spa', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FIEORK1-interior-1200x628.jpg&feedId=66435&k=815a96764b498f2e71ca4c9a1d090a5aceb4d0d7', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518219&a=2272397&m=7754', 'IEORK1'
  FROM destinations WHERE slug = 'spa';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FBFSZH_1200x630.jpg&feedId=66435&k=20cce4a5a8f821deefdc387de9cf8fc006feb343', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518220&a=2272397&m=7754', 'GBBFS2'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Radisson Blu Hotel', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F2536136%2FGWYZA_1200x630.jpg&feedId=66435&k=fd8b36062179799ba7ee6260bd73e050d2683274', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518221&a=2272397&m=7754', 'IEATE1'
  FROM destinations WHERE slug = 'hotel';
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) 
  SELECT id, 'Borgo di Luce I Monasteri Golf Resort & Spa', 'hotel', 'https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3As0.2mdn.net%2Fcreatives%2Fassets%2F4121940%2FITCTABLM-1200x628.jpg&feedId=66435&k=0bf74dc1c5e4efaab8a6e528a57db26abb4d2c73', '$', 1, 4.0, '', 'https://www.awin1.com/pclick.php?p=35826518237&a=2272397&m=7754', 'ITCTABLM'
  FROM destinations WHERE slug = 'spa';
