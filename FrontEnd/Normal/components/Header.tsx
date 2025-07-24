import { Search, Menu, User, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Header() {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground">A</span>
            </div>
            <span className="text-xl text-primary">algériebnb</span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Rechercher une destination..." 
                className="pl-10 bg-input-background border rounded-full"
              />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex">
              Devenez hôte
            </Button>
            
            <Button variant="ghost" size="sm" className="p-2">
              <Globe className="w-4 h-4" />
            </Button>

            <div className="flex items-center space-x-2 border rounded-full p-2 hover:shadow-md transition-shadow">
              <Menu className="w-4 h-4" />
              <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                <User className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Rechercher une destination..." 
              className="pl-10 bg-input-background border rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}