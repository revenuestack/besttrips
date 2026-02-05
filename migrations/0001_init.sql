-- BestTrips.org Database Schema

-- Destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Places table (hotels, restaurants, attractions)
CREATE TABLE IF NOT EXISTS places (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  destination_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'hotel', 'restaurant', 'attraction'
  description TEXT,
  price_range TEXT, -- '$', '$$', '$$$', '$$$$'
  family_friendly BOOLEAN DEFAULT 0,
  romantic BOOLEAN DEFAULT 0,
  address TEXT,
  website TEXT,
  image_url TEXT,
  rating REAL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (destination_id) REFERENCES destinations(id)
);

-- Content pages (generated)
CREATE TABLE IF NOT EXISTS content_pages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  destination_id INTEGER,
  page_type TEXT NOT NULL, -- 'hotels-families', 'restaurants-romantic', etc.
  content_json TEXT, -- Full page content as JSON
  status TEXT DEFAULT 'draft', -- 'draft', 'published'
  generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP,
  FOREIGN KEY (destination_id) REFERENCES destinations(id)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_places_destination ON places(destination_id);
CREATE INDEX IF NOT EXISTS idx_places_type ON places(type);
CREATE INDEX IF NOT EXISTS idx_places_family_friendly ON places(family_friendly);
CREATE INDEX IF NOT EXISTS idx_content_pages_status ON content_pages(status);
CREATE INDEX IF NOT EXISTS idx_content_pages_slug ON content_pages(slug);

-- Insert sample destination (Lyon, France)
INSERT INTO destinations (slug, name, country, description) VALUES
  ('lyon-france', 'Lyon', 'France', 'The gastronomic capital of France, perfect for families exploring history and culture');

-- Insert sample hotels for Lyon
INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating) VALUES
  (1, 'Hôtel Carlton Lyon', 'hotel', 'Historic 4-star hotel near Bellecour Square with family rooms and central location', '$$$', 1, 4.5),
  (1, 'Mama Shelter Lyon', 'hotel', 'Trendy hotel with connecting family rooms and rooftop restaurant', '$$', 1, 4.3),
  (1, 'Novotel Lyon Confluence', 'hotel', 'Modern hotel near Confluence Museum with kids play area', '$$', 1, 4.4),
  (1, 'Okko Hotels Lyon Pont Lafayette', 'hotel', 'Contemporary hotel with free evening snacks and central location', '$$', 1, 4.6),
  (1, 'Hôtel du Simplon', 'hotel', 'Budget-friendly family hotel near Part-Dieu station', '$', 1, 4.1);
