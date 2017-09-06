<?php

namespace App\Models;

use Illuminate\Support\Str;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\DomCrawler\Image;

class Post extends Model
{
    use HasSlug;

    protected $appends = ['image', 'excerpt'];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function getExcerptAttribute()
    {
        $plain = strip_tags($this->content);
        return Str::limit($plain, 120);
    }

    public function getImageAttribute()
    {
        $crawler = new Crawler($this->content);
        $result = $crawler->filterXpath('//img')->extract(array('src'));

        if(isset($result[0])) return $result[0];
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }
}
