#!/usr/bin/perl -w

use PerlLib::SwissArmyKnife;

my $c = `find /var/lib/myfrdcsa/codebases/minor/eurisko-resources | grep -i '\.pdf\$'`;
my $size = {};
foreach my $file (split /\n/, $c) {
  # print "<$file>\n";
  my $stat = File::Stat->new($file);
  $size->{$file} = $stat->size;
}

foreach my $file (sort {$size->{$a} <=> $size->{$b}} keys %$size) {
  # print $size->{$file}."\t".$file."\n";
  print $file."\n";
}
